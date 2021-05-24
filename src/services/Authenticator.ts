
import { sign, verify } from "jsonwebtoken"

import { authenticationData } from "../model/User"
import { config } from "dotenv"

config()

const { JWT_KEY, TOKEN_EXPIRES_IN } = process.env

export class Authenticator {

    public generateToken(payload: authenticationData): string {
        return sign(payload, JWT_KEY!, { expiresIn: TOKEN_EXPIRES_IN })
    }

    public getTokenData=(token:string):authenticationData|null=>{
        try {
            const {id}=verify(token,JWT_KEY!) as authenticationData
            return{id}
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}

export const authenticator= new Authenticator()