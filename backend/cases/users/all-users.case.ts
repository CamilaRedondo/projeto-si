import { Request, Response } from "express";
import { User } from "../../database/models/User.model";

export default async function allUsers(req: Request, res: Response): Promise<Response> {
    const users: User[] = await User.findAll();

    return res.status(200).json(users);
}