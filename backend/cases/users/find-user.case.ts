import { Request, Response } from "express";
import { User } from "../../database/models/User.model";

export default async function findUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) return res.status(404).json();

    const user: User | null = await User.findOne({ where: { id } });

    return res.status(200).json(user)
}