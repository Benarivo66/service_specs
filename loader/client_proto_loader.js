const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');

const PROTO_PATH = 'node_modules/service-specs/protos/user.proto';
    

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}    

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const UserService = protoDescriptor.UserService;

const client = new UserService.UserServiceRoutes(
    "localhost:50051",
    grpc.credentials.createInsecure()
);    

module.exports = client;
    
    


