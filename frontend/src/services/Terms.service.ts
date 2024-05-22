import { ServerResponse, Term, User } from "../types/definitions";
import HTTPClient from "./HTTPClient";

class TermsService {
    constructor(
        private readonly baseEndpoint: string = "terms/",
        private readonly client: HTTPClient = new HTTPClient()
    ) { }
    
    async Update(id: number, body: Partial<Omit<Term, "id" | "userId">>): Promise<ServerResponse<User>> {
        return await this.client.PUT<User, Partial<Omit<Term, "id" | "userId">>>(
            this.baseEndpoint + 'update/' + String(id),
            body
        );
    }
}

export default TermsService;