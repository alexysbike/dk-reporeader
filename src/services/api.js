import axios from 'axios';
import { API, BACKEND } from '../config/apiPaths';

const resolver = async (request) => {
  const response = await request;
  return response.data;
};

const optionsMaker = () => {
  const token = localStorage.getItem('github-login-access_token');
  if (!token) {
    return {};
  }
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

class Api {
  static getRepo(owner, repo) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}`, optionsMaker()));
  }
  static getBranches(owner, repo) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}/branches`, optionsMaker()));
  }
  static getTree(owner, repo, sha) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}/git/trees/${sha}`, optionsMaker()));
  }
  static getBlob(owner, repo, sha) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}/git/blobs/${sha}`, optionsMaker()));
  }

  static generateAccessToken(code, state) {
    return resolver(axios.post(`${BACKEND}/github-login`, {
      code,
      state,
    }));
  }

  static getUserInfo() {
    return resolver(axios.get(`${API}/user`, optionsMaker()));
  }

  // TODO: implement pagination using Link response header
  static getUserRepos() {
    return resolver(axios.get(`${API}/user/repos?per_page=200`, optionsMaker()));
  }
}

export default Api;
