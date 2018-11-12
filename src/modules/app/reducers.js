import { regularSetReducer, spliceReducer, regularPushReducer, arraySetReducer } from '../../utils/reducerHelpers';

export const initialState = {
  owner: 'alexysbike',
  repo: 'firebase-login',
  branch: 'master',
  branches: [],
  isLogged: !!localStorage.getItem('github-login-access_token'),
  repoId: 150167756,
  repositories: [],
  userLogin: null,
  tabs: [],
};

export const reducers = {
  setOwner: regularSetReducer('owner'),
  setRepo: regularSetReducer('repo'),
  setBranch: regularSetReducer('branch'),
  setBranches: regularSetReducer('branches'),
  setIsLogged: regularSetReducer('isLogged'),
  setRepoId: regularSetReducer('repoId'),
  setRepositories: regularSetReducer('repositories'),
  setUserLogin: regularSetReducer('userLogin'),
  addTabs: regularPushReducer('tabs'),
  removeTab: spliceReducer('tabs'),
  resetTab: arraySetReducer('tabs'),
};
