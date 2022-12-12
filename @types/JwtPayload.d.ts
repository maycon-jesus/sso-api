declare global {
  module 'jsonwebtoken' {
    export interface UserIDJwtPayload extends jwt.JwtPayload {
      userId: number;
    }
  }
}
