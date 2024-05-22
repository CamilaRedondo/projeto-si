import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import { DefaultResponse } from "../../types/definitions";
import { Address } from "../../database/models/Address.model";
import { Term } from "../../database/models/Term.model";

export default async function allUsers(req: Request, res: Response): Promise<Response> {
    const users: User[] = await User.findAll({ include: [ Address, Term ] });

    return res.status(200).json({
        ok: true,
        status: "200",
        message: "Usuários encontrados.",
        data: users
    } satisfies DefaultResponse<User[]>);
}