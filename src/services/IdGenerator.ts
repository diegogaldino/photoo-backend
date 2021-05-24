import {v4} from "uuid"

export class IdGenerator{
    execute=():string=>v4()
}

export const idGenerator = new IdGenerator()