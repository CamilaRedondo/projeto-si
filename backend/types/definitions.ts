/**
 * Requests/Responses definitions
 * --- --- --- --- --- --- --- --- --- ---
 */
export type DefaultResponse<T extends any | Array<any> = void> = {
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