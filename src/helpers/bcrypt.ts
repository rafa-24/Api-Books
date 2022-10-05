import bcrypt = require("bcrypt");

export const hashingPassword = (plainPassword: string) => {
      return bcrypt.hashSync(plainPassword, 10);
}


export const comparePassword = (plainPassword: string, hashedPassword: any) => {
      return bcrypt.compareSync(plainPassword, hashedPassword);
}
