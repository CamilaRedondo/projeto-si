import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import { DefaultResponse, FailedResponse } from "../../types/definitions";
import { Address } from "../../database/models/Address.model";
import { Term } from "../../database/models/Term.model";

export default async function findUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Usuário não encontrado"
    } satisfies FailedResponse);

    const user: User | null = await User.findOne({ where: { id }, include: [ Address, Term ] });

    if (!user) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Usuário não encontrado"
    } satisfies FailedResponse);


    return res.status(200).json({
        ok: true,
        status: "200",
        message: "Usuário encontrado.",
        data: user
    } satisfies DefaultResponse<User>)
}