import { Router } from "express";
import { create, login } from "../controllers/users.controllers";



export const router = Router();

router.post('/api/v1/auth/register', create)

router.post('/api/v1/auth/login', login)
