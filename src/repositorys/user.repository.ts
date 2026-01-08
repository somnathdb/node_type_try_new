import { IUser } from "../interfaces/user.interface";
import userSchema from '../models/user.model';

export class userRepository{
    create(data:IUser){
        return userSchema.create(data)
    }
}