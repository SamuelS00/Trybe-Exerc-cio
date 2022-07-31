import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../services/auth.service';

class AuthController {
  constructor(private authService = new AuthService()) {}

  public getAll = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await this.authService.login(email, password);

    res.status(StatusCodes.OK).json(user);
  };
}