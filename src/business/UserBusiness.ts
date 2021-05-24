import { User } from "../model/User";
import { idGenerator } from "../services/IdGenerator";
import { hashManager } from "../services/HashManager"
import { authenticator } from "../services/Authenticator";

export interface UserDatabase {
    signup(user: User): Promise<void>
    getUserByEmail(email: string): Promise<User | undefined>
}

export class UserBusiness {
    constructor(private userDB: UserDatabase) { }

    public signup = async (name: any, email: any, password: any,nickname: any): Promise<string> => {
        const newUser = new User(idGenerator.execute(), name, email, hashManager.generate(password),nickname)
        await this.userDB.signup(newUser)

        return authenticator.generateToken({ id: newUser.id })
    }
}