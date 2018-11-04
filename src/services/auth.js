import uuid from 'uuid/v4';
import { GITHUB_CLIENT_ID } from '../config/apiPaths';
import Api from './api';

class AuthService {
  static initialize() {
    const state = uuid();
    localStorage.setItem('github-login-state', state);
    localStorage.setItem('github-login-final-redirect', window.location);
    const queryParams = [
      `client_id=${GITHUB_CLIENT_ID}`,
      `state=${state}`,
      'scope=repo',
    ];
    window.location = `https://github.com/login/oauth/authorize?${queryParams.join('&')}`;
  }

  static async getAccessToken(code, state) {
    const currentState = localStorage.getItem('github-login-state');
    if (state === currentState) {
      const response = await Api.generateAccessToken(code, state);
      if (response.access_token) {
        localStorage.setItem('github-login-access_token', response.access_token);
        const redirect = localStorage.getItem('github-login-final-redirect');
        if (redirect) window.location = redirect;
        return true;
      }
      // eslint-disable-next-line
        console.error('Error in authentication');
    } else {
      // eslint-disable-next-line
      console.error('States not match');
    }
    return false;
  }
}

export default AuthService;
