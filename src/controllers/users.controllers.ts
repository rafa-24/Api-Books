import { Request, Response } from "express";
import { UserInterface } from "../interface/User.interface";
import { User } from "../entitys/User";
import { hashingPassword } from "../helpers/bcrypt";
import { comparePassword } from "../helpers/bcrypt";
import { generatedToken } from "../helpers/generateToken";


export const create = async (
      req: Request<UserInterface>,
      res: Response
) => {

      const { firstName, lastName, email, password } = req.body;

      const user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = hashingPassword(password);

      await user.save();

      res.status(201).json(user);

}

export const login = async (req: Request, res: Response, next: any) => {

      try {
            const { email, password } = req.body;

            // verificar si ya se registro y esta en la base de datos
            const user = await User.findOneBy({ email });
            if (!user) throw { error: 'Usuario no encontrado' };

            const checkPassword = comparePassword(password, user?.password);
            if (!checkPassword) throw { error: 'Email o contraseña invalidos' };

            // Token inico de sesion
            const tokenSession = await generatedToken(user);

            res.send({ data: user, tokenSession });

      } catch (error) {
            next(error)
      }


}


// Ruta protegida
export const findAll = async (req: Request, res: Response, next: any) => {

      try {
            // query que traiga a todos los usuarios
            const listUsers = await User.find({ relations: { book: true } });
            return res.status(200).json(
                  {
                        message: 'Estos son todos los usuarios',
                        listUsers
                  }
            );
      } catch (err) {
            next(err);
      }


}



