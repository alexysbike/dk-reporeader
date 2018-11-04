import AuthService from '../../services/auth';

const effects = {
  async generateToken({ code, state }) {
    const isLogged = await AuthService.getAccessToken(code, state);
    this.setIsLogged(isLogged);
  },
};

export default effects;
