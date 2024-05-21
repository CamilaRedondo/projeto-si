/**
 * Requests/Responses definitions
 * --- --- --- --- --- --- --- --- --- ---
 */
export type DefaultResponse<T extends any | Array<any> = []> = {
    ok: true,
    status: string;
    message: string;
    data?: T;
}

export type FailedResponse = {
    ok: false;
    status: string;
    message: string;
}