import { Response } from "express";

interface ResponseObject {
    success: boolean;
    data: object;
    status?: number;
}

export class ResponseWrapper {
    public res: Response;

    constructor(response: Response) {
        this.res = response;
    }

    public handle(response: ResponseObject, successCode: number, failCode: number): Response {
        if (response.success) {
            return this.res.status(successCode).send(response);
        }
        if (response.status) {
            failCode = response.status;
        }

        delete response.status;
        return this.res.status(failCode).send(response);
    }

    public created(response: ResponseObject): Response {
        return this.handle(response, 201, 400);
    }

    public ok(response: ResponseObject): Response {
        return this.handle(response, 200, 400);
    }

    public unauthorized(response: ResponseObject): Response {
        return this.handle(response, 200, 401);
    }

    public forbidden(response: ResponseObject): Response {
        return this.handle(response, 200, 403);
    }
}
