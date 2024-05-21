import { Request, Response } from "express";
import { User } from "../../database/models/User.model";

export default async function updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email }: Partial<User> = req.body;

    if (!req.body || !id) return res.status(404).json()
    
    User.update({ name, email }, { where: { id } })

    return res.status(204).json()
}