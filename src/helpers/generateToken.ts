import * as jwt from "jsonwebtoken";


export const generatedToken = async (user: any) => {
      return jwt.sign(
            {
                  id: user.id,
                  firstName: user.firstName,
                  email: user.email
            },
            'secretKey',
            {
                  expiresIn: '2h'
            }
      );

}