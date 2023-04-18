"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWrapper = void 0;
class ResponseWrapper {
    constructor(response) {
        this.res = response;
    }
    handle(response, successCode, failCode) {
        if (response.success) {
            return this.res.status(successCode).send(response);
        }
        if (response.status) {
            failCode = response.status;
        }
        delete response.status;
        return this.res.status(failCode).send(response);
    }
    created(response) {
        return this.handle(response, 201, 400);
    }
    ok(response) {
        return this.handle(response, 200, 400);
    }
    unauthorized(response) {
        return this.handle(response, 200, 401);
    }
    forbidden(response) {
        return this.handle(response, 200, 403);
    }
}
exports.ResponseWrapper = ResponseWrapper;
//# sourceMappingURL=responseWrapper.js.map