import { User } from '../../user/user.entity'
import { JwtPayload } from '../interfaces/JwtPayload.interface'

export const mockUser: User = {
    id: 1,
    email: 'm@m.com',
    password: 'mm'
}

export const mockToken = 'token'

export const mockPayload: JwtPayload = { id: 1 }
