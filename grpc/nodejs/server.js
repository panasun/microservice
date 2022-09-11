let PROTO_PATH = __dirname + "/order.proto";
let grpc = require("@grpc/grpc-js");
let protoLoader = require("@grpc/proto-loader");
let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

let orderProto = grpc.loadPackageDefinition(packageDefinition).orderPack;

function O3Func(call, callback) {
  console.log("OrderFunc2:", call.request.name);
  callback(null, { result: "Hello 2 " + call.request.name });
}

function main() {
  let server = new grpc.Server();
  server.addService(orderProto.OrderService.service, {
    O3Func: O3Func
  });
  server.bindAsync(
    "0.0.0.0:8099",
    grpc.ServerCredentials.createInsecure(), () => {
      server.start();
    });
  console.log("Start server");
}

main();
