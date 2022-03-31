const loader = require('./loader/proto-loader');

function load(grpc, serviceName){
    return loader(grpc, serviceName, 'node_modules/service_specs');
}

module.export = {
    load
}