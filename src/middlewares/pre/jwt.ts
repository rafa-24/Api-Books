import { Request, Response, } from "express";
import { Controllers } from "../../interface/controllers.interface";
import * as jwt from "jsonwebtoken";

export const test: Controllers = (req: Request, res: Response, next: any) => {
      try {
            const token = req.headers.authorization?.split(' ')[1] as string
            const tokenData: any = jwt.verify(token, 'secretKey');

            req.body.jwt = tokenData

            req.headers.authorization = tokenData.id

            next();

      } catch (e) {
            next(e)
      }

}

export const errorHandler = (err: any, req: any, res: any, next: any) => {
      if (res.headersSent) {
            return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
}