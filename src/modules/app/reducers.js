import { regularSetReducer } from '../../utils/reducerHelpers';

export const initialState = {
  owner: 'alexysbike',
  repo: 'firebase-login',
  branch: 'master',
  isLogged: !!localStorage.getItem('github-login-access_token'),
};

export const reducers = {
  setOwner: regularSetReducer('owner'),
  setRepo: regularSetReducer('repo'),
  setBranch: regularSetReducer('branch'),
  setIsLogged: regularSetReducer('isLogged'),
};
