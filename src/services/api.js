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
}

export default Api;
