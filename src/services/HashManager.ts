import { genSaltSync, hashSync, compareSync } from "bcryptjs"
import { config } from "dotenv"

config()
export class HashManager {
    public generate = (plainText: string): string => {
        const salt = genSaltSync(12)
        return hashSync(plainText, salt)
    }
    public compare = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}

export const hashManager = new HashManager()