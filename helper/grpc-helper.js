const ServerError = require('../Errors/ServerError');
const grpc = require('@grpc/grpc-js');


class GrpcHelper {
    static respondWithError(error, callback){
        if(error instanceof ServerError){
            callback({ code: error.code, details: error.message });
        }else{
            callback({code: grpc.status.INTERNAL});
        }
    }

    static convertGRPCError(ErrorClass, error){
        const code = error.message.split(/\b/)[2];
        const message = error.message.split(': ')[1];

        if(error.code === grpc.status.INTERNAL){
            return new ErrorClass('INTERNAL');
        }else{
            return new ErrorClass(code, message);
        }
    }
}

module.exports = GrpcHelper;