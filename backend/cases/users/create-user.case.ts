import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import bcrypt from "bcrypt";

export default async function createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password }: User = req.body;

    const user: User | null = await User.findOne({ where: { name } });

    if (user) return res.status(403).json();

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (err: Error | undefined, encrypted: string) {
        if (err) return console.log(err);

        await User.create({ name, password: encrypted, email })
    });
    
    return res.status(201).json({});
}