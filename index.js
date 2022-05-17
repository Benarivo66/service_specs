const loader = require('./loader/proto-loader');
const client = require('./loader/client_proto_loader');
const GrpcHelper = require('./helper/grpc-helper');
const ServerError = require('./Errors/ServerError');

function load(grpc, serviceName){
    return loader(grpc, serviceName, 'node_modules/service-specs');
}

module.exports = {
    load,
    client,
    GrpcHelper,
    ServerError
}