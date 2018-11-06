import { map, prop } from 'ramda';
import AuthService from '../../services/auth';
import Api from '../../services/api';

const nameMap = map(prop('name'));

const effects = {
  async generateToken({ code, state }) {
    const isLogged = await AuthService.getAccessToken(code, state);
    this.setIsLogged(isLogged);
  },
  async getRepo({ useDefault = false, resolve, reject }, rootState) {
    try {
      const { app: { owner, repo } } = rootState;
      const response = await Api.getRepo(owner, repo);
      this.setRepoId(response.id);
      if (useDefault) {
        this.setBranch(response.default_branch);
      }
      const branches = await Api.getBranches(owner, repo);
      this.setBranches(nameMap(branches));
      if (resolve) resolve();
    } catch (error) {
      if (reject) reject(error.message);
    }
  },
};

export default effects;
