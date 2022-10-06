import { Request, Response } from "express";
export interface Controllers {
      (req: Request, res: Response, next?: any): void

}