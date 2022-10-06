import { Router } from "express";
import { create, login, findAll } from "../controllers/users.controllers";
import { errorHandler, test } from "../middlewares/pre/jwt";


export const router = Router();

router.post('/api/v1/register', create)

router.post('/api/v1/login', login)

router.get('/api/v1/users', test, findAll, errorHandler)
