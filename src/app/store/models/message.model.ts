import { BaseModel } from "./base-model.model";
import { User } from "./user.model";

export interface Message extends BaseModel{
    content: string
    replies?: Message[]
    from: User
    to: User
    sent_time?: string
}