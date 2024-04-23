import { Request, Response } from "express";
import { User } from "../../database/models/User.model";

export default async function deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) return res.status(404);

    User.destroy({ where: { id } })

    return res.status(204).json({});
}