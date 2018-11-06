import { regularSetReducer } from '../../utils/reducerHelpers';

export const initialState = {
  owner: 'alexysbike',
  repo: 'firebase-login',
  branch: 'master',
  branches: [],
  isLogged: !!localStorage.getItem('github-login-access_token'),
  repoId: 150167756,
};

export const reducers = {
  setOwner: regularSetReducer('owner'),
  setRepo: regularSetReducer('repo'),
  setBranch: regularSetReducer('branch'),
  setBranches: regularSetReducer('branches'),
  setIsLogged: regularSetReducer('isLogged'),
  setRepoId: regularSetReducer('repoId'),
};
