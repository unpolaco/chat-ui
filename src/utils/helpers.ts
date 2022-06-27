import { User, UserStatus } from "../types/chat.types"

export const userStatus = (user: User) =>{
    return user.status === UserStatus.online ? UserStatus.online : UserStatus.offline
}