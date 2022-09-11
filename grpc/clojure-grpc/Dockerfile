FROM clojure:openjdk-11-lein-slim-buster AS builder
WORKDIR /usr/src/app
COPY . .
RUN lein do clean, uberjar

FROM ghcr.io/graalvm/graalvm-ce:21.0.0 as native
RUN curl -O https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein && \
    chmod +x lein && \
    mv lein /usr/bin/lein && \
    lein upgrade
RUN gu install native-image
WORKDIR /usr/src/app
    
COPY --from=builder /usr/src/app/target/app.jar /usr/src/app/app.jar
RUN native-image \
      --allow-incomplete-classpath \
      --static \
      --enable-http \
      --no-fallback \
      --no-server \
      --initialize-at-build-time \
      -jar app.jar app

FROM scratch

COPY --from=native /usr/src/app/app /app

CMD ["/app"]
