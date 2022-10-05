import { Request, Response } from "express";
import { UserInterface } from "../interface/User.interface";
import { User } from "../entitys/User";
import { hashingPassword } from "../helpers/bcrypt";
import { comparePassword } from "../helpers/bcrypt";
import { generatedToken, verifyToken } from "../helpers/generateToken";

export const create = async (
      req: Request<UserInterface>,
      res: Response
): Promise<any> => {

      const { firstName, lastName, email, password } = req.body;

      const user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = hashingPassword(password);

      await user.save();

      res.status(201).json(user);

}

export const login = async (req: Request, res: Response) => {

      const { email, password } = req.body;

      // verificar si ya se registro y esta en la base de datos
      const user = await User.findOneBy({ email });

      if (!user) {
            res.status(404);
            res.send({ error: 'Usuario no encontrado' });
      }

      const checkPassword = comparePassword(password, user?.password);

      // Token inico de sesion
      const tokenSession = await generatedToken(user);

      if (checkPassword) {
            res.send(
                  {
                        data: user,
                        tokenSession
                  }

            )
      } else {
            res.send('Email o contraseña invalidos');
      }

}


// Ruta protegida
export const findAll = async (req: Request, res: Response) => {

      try {

            // obtener el bearer token
            const token: any = req.headers.authorization?.split(' ')[1];

            // verificar la data del token
            const tokenData: any = await verifyToken(token);

            console.log(tokenData); //TODO: carga util del usuario

            if (tokenData.id) {
                  // query que traiga a todos los usuarios
                  const listUsers = User.find();
                  res.status(200)
                  res.send(
                        {
                              message: 'Estos son todos los usuarios',
                              listUsers
                        }
                  );
            } else {
                  res.status(409)
                  res.send({ error: 'Tu por aqui no pasas!' });
            }
      } catch (err) {
            console.error(err);
            return null;
      }


}



