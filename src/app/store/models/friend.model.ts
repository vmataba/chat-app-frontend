import { BaseModel } from "./base-model.model";
import { User } from "./user.model";

export interface Friend extends BaseModel{
    id?:number
    user: User
    friends_with: User,
    accepted?: boolean,
    online?:boolean
}