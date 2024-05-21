import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import bcrypt from "bcrypt";
import { DefaultResponse, FailedResponse } from "../../types/definitions";

export default async function login(req: Request, res: Response): Promise<Response> {
    const { document, password } = req.body;

    if (!document || !password) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Dados não encontrados"
    } satisfies FailedResponse);

    const user: User | null = await User.findOne({ where: { document } });

    if (!user) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Dados não encontrados"
    } satisfies FailedResponse);

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) return res.status(404).json({
        ok: false,
        status: "404",
        message: "Dados não encontrados"
    } satisfies FailedResponse);

    return res.status(200).json({
        ok: true,
        status: "200",
        message: "Autenticado com sucesso.",
        data: user
    } satisfies DefaultResponse<User>);
}