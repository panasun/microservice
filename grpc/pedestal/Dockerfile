FROM clojure:openjdk-11-lein-slim-buster AS builder
WORKDIR /usr/src/app
COPY . .
RUN lein uberjar

FROM openjdk:11
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/target/app.jar app.jar
    
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]