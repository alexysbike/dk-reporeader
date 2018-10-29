import { regularSetReducer } from '../../utils/reducerHelpers';

export const initialState = {
  owner: 'alexysbike',
  repo: 'firebase-login',
  branch: 'master',
};

export const reducers = {
  setOwner: regularSetReducer('owner'),
  setRepo: regularSetReducer('repo'),
  setBranch: regularSetReducer('branch'),
};
