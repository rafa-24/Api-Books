import * as jwt from "jsonwebtoken";
import { User } from "../entitys/User";

export const generatedToken = async (user: any) => {
      return jwt.sign(
            {
                  id: user.id,
                  firstName: user.firstName,
                  email: user.email
            },
            'secretKey', //TODO: Debe estar como variable de entorno
            {
                  expiresIn: '2h'
            }
      );

}

export const verifyToken = async (token: string) => {
      try {
            return jwt.verify(token, 'secretKey');
      } catch (err) {
            console.error(err);
            return null;
      }
}