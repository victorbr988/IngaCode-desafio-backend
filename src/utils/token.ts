import jwt, { JwtPayload } from 'jsonwebtoken';
import { CreateTokenProps } from './types';

const superSecret = process.env.SUPER_SECRET as string

export function createToken(payload: CreateTokenProps): string {
  const token: string = jwt.sign({ payload: { ...payload } }, superSecret, { algorithm: 'HS256', expiresIn: '1d' })

  return token
}

export function validateToken(authorization: string): string | JwtPayload {
  return jwt.verify(authorization, superSecret)
}