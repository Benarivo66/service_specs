class ServerError extends Error{
    constructor(code, message, details){
        super();

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, ServerError);
        }

        this.code = code;
        this.message = message;
        this.details = details;
    }
}

module.exports = ServerError;