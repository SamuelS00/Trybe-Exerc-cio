import connection from '../models/connection';
import AuthModel from '../models/auth.model';
import User from '../interface/user.interface';

// testar this.model = new AuthModel(connection); no paranteses do constructor como parametro;

class AuthService {
  public model: AuthModel;

  constructor() {
    this.model = new AuthModel(connection);
  };

  public async login(email: string, password: string): Promise<User[]> {
    const user = await this.model.login(email, password);

    return user;
  };
};

export default AuthService;