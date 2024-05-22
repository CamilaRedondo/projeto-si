import { User, ServerResponse, DeepOmit } from "../types/definitions";
import HTTPClient from "./HTTPClient";

class UserService {
    constructor(
        private readonly baseEndpoint: string = "users/",
        private readonly client: HTTPClient = new HTTPClient()
    ) {}

    async FindAll(): Promise<ServerResponse<User[]>> {
        return await this.client.GET<User[]>(
            this.baseEndpoint + 'all'
        );
    }

    async FindOne(id: number): Promise<ServerResponse<User>> {
        return await this.client.GET<User>(
            this.baseEndpoint + 'find/' + String(id)
        );
    }

    async Create(body: DeepOmit<User, "id" | "userId">): Promise<ServerResponse<void>> {
        return await this.client.POST<void, DeepOmit<User, "id" | "userId">>(
            this.baseEndpoint + 'create',
            body
        );
    }

    async Update(id: number, body: Partial<Omit<User, "id" | "address" | "term">>): Promise<ServerResponse<User>> {
        return await this.client.PUT<User, Partial<Omit<User, "id" | "address" | "term">>>(
            this.baseEndpoint + 'update/' + String(id),
            body
        );
    }

    async Delete(id: number): Promise<ServerResponse<void>> {
        return await this.client.DELETE<void>(
            this.baseEndpoint + 'delete/' + String(id)
        );
    }
}

export default UserService