import { BaseModel } from "./base-model.model";
import { Friend } from "./friend.model";

export interface User extends BaseModel{
    first_name: string
    middle_name?:string
    last_name:string
    email:string
    profile_image?:string
    online?:boolean
    friends: Friend[]
}