const protoLoader = require('@grpc/proto-loader');

function load(grpc, serviceName, baseDirectory){
    const PROTO_PATH =  baseDirectory?
     baseDirectory + `../protos/${serviceName}.proto`
     : __dirname + `../protos/${serviceName}.proto`;

    const options = {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    const userService = protoDescriptor.userService;
    return userService;
}

module.exports = load;

