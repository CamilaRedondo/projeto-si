import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import bcrypt from "bcrypt";
import { Address } from "../../database/models/Address.model";
import { DefaultResponse, FailedResponse } from "../../types/definitions";

export default async function createUser(req: Request, res: Response): Promise<Response> {
    const { name, password, document, address }: User = req.body;

    const user: User | null = await User.findOne({ where: { document } });

    if (user) return res.status(403).json({
        ok: false,
        status: "403",
        message: "Usuário já existe."
    } satisfies FailedResponse);

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (err: Error | undefined, encrypted: string) {
        if (err) return console.log(err);

        await User.create({ name, password: encrypted, document, address }, { include: [ Address ] })
    });
    
    return res.status(201).json({
        ok: true,
        status: "201",
        message: "Usuário criado com sucesso."
    } satisfies DefaultResponse);
}