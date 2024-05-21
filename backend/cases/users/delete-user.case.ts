import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import { DefaultResponse, FailedResponse } from "../../types/definitions";

export default async function deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Usuário não encontrado"
    } satisfies FailedResponse);

    User.destroy({ where: { id } })

    return res.status(204).json({
        ok: true,
        status: "204",
        message: "Usuário deletado com sucesso."
    } satisfies DefaultResponse);
}