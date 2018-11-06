import { map, prop, compose, flatten } from 'ramda';
import AuthService from '../../services/auth';
import Api from '../../services/api';

const nameMap = map(prop('name'));

const reposJoiner = compose(
  map((repository) => {
    const { full_name: fullName } = repository;
    const [owner, repo] = fullName.split('/');
    return { owner, repo, fullName };
  }),
  flatten,
);

const effects = {
  async generateToken({ code, state }) {
    const isLogged = await AuthService.getAccessToken(code, state);
    this.setIsLogged(isLogged);
  },
  async getRepo({ useDefault = false, resolve, reject } = {}, rootState) {
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
  async getRepositoriesFromUser({ resolve, reject } = {}, rootState) {
    if (rootState.app.isLogged) {
      try {
        const userInfo = await Api.getUserInfo();
        this.setUserLogin(userInfo.login);
        const userRepos = await Api.getUrl(userInfo.repos_url);
        const orgsInfo = await Api.getUserOrgs();
        const orgsRepos = await Promise.all(orgsInfo.map(org => Api.getUrl(org.repos_url)));
        const repositories = reposJoiner([userRepos, ...orgsRepos]);
        this.setRepositories(repositories);
        if (resolve) resolve();
      } catch (error) {
        if (reject) reject(error.message);
      }
    }
  },
};

export default effects;
