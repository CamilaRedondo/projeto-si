import { Request, Response } from "express";
import { Term } from "../../database/models/Term.model";
import { DefaultResponse, FailedResponse } from "../../types/definitions";
import { Address } from "../../database/models/Address.model";
import { User } from "../../database/models/User.model";

export default async function updateTerms(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { options, version, term }: Partial<Term> = req.body;

    if (!req.body || !id) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Usuário não encontrado"
    } satisfies FailedResponse);

    await Term.update({ version, options, term }, { where: { id } });

    const user = await User.findOne({ where: { id }, include: [ Address ] });

    if (!user) {
        return res.status(200).json({
            ok: true,
            status: "200",
            message: "Termos atualizado com sucesso.",
        } satisfies DefaultResponse)
    }

    return res.status(200).json({
        ok: true,
        status: "200",
        message: "Termos atualizado com sucesso.",
        data: user
    } satisfies DefaultResponse<User>)
}