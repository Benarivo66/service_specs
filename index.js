const loader = require('./loader/proto-loader');
const client = require('./loader/client_proto_loader');

function load(grpc, serviceName){
    return loader(grpc, serviceName, 'node_modules/service-specs');
}

module.exports = {
    load,
    client
}