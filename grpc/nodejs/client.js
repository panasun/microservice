const path = require("path");
const PROTO_PATH = path.resolve(__dirname, "./order.proto");
const GRPCClient = require("node-grpc-client");
const grpc = new GRPCClient(
  PROTO_PATH,
  "orderPack",
  "OrderService",
  "localhost:8099"
);

function main() {
  const dataToSend = {
    name: "blue",
  };

  const options = {
    metadata: {},
  };

  grpc.runService(
    "O3Func",
    dataToSend,
    (err, res) => {
      console.log("Service response ", res);
    },
    options
  );
}

main();
