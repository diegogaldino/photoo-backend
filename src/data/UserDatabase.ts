import { UserDatabase } from "../business/UserBusiness";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDb extends BaseDatabase implements UserDatabase {
    public signup = async (user: User) => {
        await BaseDatabase.connection(this.tables.users).insert(user)
    }

    public getUserByEmail = async (email: string) => {
        const [user] = await UserDb.connection(this.tables.users).where({ email })
        if (user) return user
    }
}