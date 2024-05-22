import { User, ServerResponse, Address } from "../types/definitions";
import HTTPClient from "./HTTPClient";

class AddressService {
    constructor(
        private readonly baseEndpoint: string = "address/",
        private readonly client: HTTPClient = new HTTPClient()
    ) { }
    
    async Update(id: number, body: Partial<Omit<Address, "id" | "userId">>): Promise<ServerResponse<User>> {
        return await this.client.PUT<User, Partial<Omit<Address, "id" | "userId">>>(
            this.baseEndpoint + 'update/' + String(id),
            body
        );
    }
}

export default AddressService;