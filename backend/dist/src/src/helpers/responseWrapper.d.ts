import { Response } from "express";
interface ResponseObject {
    success: boolean;
    data: object;
    status?: number;
}
export declare class ResponseWrapper {
    res: Response;
    constructor(response: Response);
    handle(response: ResponseObject, successCode: number, failCode: number): Response;
    created(response: ResponseObject): Response;
    ok(response: ResponseObject): Response;
    unauthorized(response: ResponseObject): Response;
    forbidden(response: ResponseObject): Response;
}
export {};
