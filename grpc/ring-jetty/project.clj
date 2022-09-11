(defproject ring-jetty "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring/ring-core "1.9.5"]
                 [ring/ring-jetty-adapter "1.9.5"]]
  :main simple.main
  :uberjar-name "app.jar"
  :profiles {:uberjar {:aot :all}})
