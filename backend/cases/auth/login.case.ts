import { Request, Response } from "express";
import { User } from "../../database/models/User.model";
import bcrypt from "bcrypt";

export default async function login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) return res.status(404).json();

    const user: User | null = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json();

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) return res.status(404).json();

    return res.status(200).json({ email, name: user.name });
}