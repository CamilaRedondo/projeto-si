import { Request, Response } from "express";
import { Address } from "../../database/models/Address.model";
import { DefaultResponse, FailedResponse } from "../../types/definitions";
import { User } from "../../database/models/User.model";

export default async function updateAddress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { line_1, line_2, city, state, zip_code }: Partial<Address> = req.body;

    if (!req.body || !id) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Usuário não encontrado"
    } satisfies FailedResponse);

    await Address.update({ line_1, line_2, city, state, zip_code }, { where: { userId: id } });

    const user = await User.findOne({ where: { id }, include: [ Address ] });

    if (!user) {
        return res.status(200).json({
            ok: true,
            status: "200",
            message: "Endereço atualizado com sucesso.",
        } satisfies DefaultResponse)
    }

    return res.status(200).json({
        ok: true,
        status: "200",
        message: "Endereço atualizado com sucesso.",
        data: user
    } satisfies DefaultResponse<User>)
}