import { FailedResponse, ServerResponse } from "../types/definitions";

export default class HTTPClient {
    constructor(
        private readonly baseUrl: string = "http://localhost:5000/",
        private readonly headers: HeadersInit = { 'Content-Type': 'application/json' }
    ) {}

    async GET<ReturnType>(
        endpoint: string
    ): Promise<ServerResponse<ReturnType>> {
        try {
            return await fetch(this.baseUrl + endpoint, {
                method: 'GET',
                headers: this.headers,
                signal: AbortSignal.timeout(3000)
            }).then((res: Response) => res.json());
        } catch (_) {
            return {
                ok: false,
                status: "400",
                message: 'Falha ao obter dados'
            } satisfies FailedResponse;
        }
    }
    
    async POST<ReturnType, BodyType>(
        endpoint: string,
        body: BodyType
    ): Promise<ServerResponse<ReturnType>> {
        try {
            return await fetch(this.baseUrl + endpoint, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(3000)
            }).then((res: Response) => res.json())            
        } catch (_) {
            return {
                ok: false,
                status: "400",
                message: 'Falha ao obter dados'
            } satisfies FailedResponse;
        }
    }
    
    async PUT<ReturnType, BodyType>(
        endpoint: string,
        body: BodyType
    ): Promise<ServerResponse<ReturnType>> {
        try {
            return await fetch(this.baseUrl + endpoint, {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(3000)
            }).then((res: Response) => res.json())
        } catch (_) {
            return {
                ok: false,
                status: "400",
                message: 'Falha ao obter dados'
            } satisfies FailedResponse;
        }
    }
    
    async DELETE<ReturnType>(
        endpoint: string
    ): Promise<ServerResponse<ReturnType>> {
        try {
            return await fetch(this.baseUrl + endpoint, {
                method: 'DELETE',
                headers: this.headers,
                signal: AbortSignal.timeout(3000)
            }).then((res: Response) => res.json());
        } catch (_) {
            return {
                ok: false,
                status: "400",
                message: 'Falha ao obter dados'
            } satisfies FailedResponse;
        }
    }    
}