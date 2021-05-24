import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDb } from "../data/UserDatabase";

const userBusiness = new UserBusiness(new UserDb)

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const token = await userBusiness.signup(req.body.name, req.body.email, req.body.password, req.body.nickname)
            res.status(201).send({ token })

        } catch (error) {
            res.status(500).send("internal server error")
        }
    }
}