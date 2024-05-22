/**
 * Models definitions
 * --- --- --- --- --- --- --- --- --- ---
 */
export type Term = {
    id: number;
    version: string;
    options: string;
    term: string;
    userId: number;
}

export type Address = {
    id: string;
    line_1: string;
    line_2: string;
    city: string;
    state: string;
    zip_code: string;
    userId: number;
}

export type User = {
    id: number;
    name: string;
    document: string;
    password: string;
    address: Address;
    term: Term;
}

/**
 * HTTP Requests/Responses
 * --- --- --- --- --- --- --- --- --- ---
 */
export type DefaultResponse<T = void> = {
    ok: true;
    status: string;
    message: string;
    data?: T;
}

export type FailedResponse = {
    ok: false;
    status: string;
    message: string;
}

export type ServerResponse<ReturnType = void> = | DefaultResponse<ReturnType> | FailedResponse;

/**
 * Extra utility types
 * --- --- --- --- --- --- --- --- --- ---
 */
type Primitives = string | number | boolean | undefined | null | Function | Symbol

export type DeepOmitArray<T extends any[], K> = {
    [P in keyof T]: DeepOmit<T[P], K>
}

export type DeepOmit<T, K> = 
    T extends Primitives ? T : {
        [P in Exclude<keyof T, K>]:
            T[P] extends infer TP ?
                TP extends Primitives ?
                    TP : TP extends any[] ?
                        DeepOmitArray<TP, K> : DeepOmit<TP, K> : never
    }