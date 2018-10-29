import axios from 'axios';
import { API } from '../config/apiPaths';

const resolver = async (request) => {
  const response = await request;
  return response.data;
};

class Api {
  static getTree(owner, repo, sha) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}/git/trees/${sha}`));
  }
  static getBlob(owner, repo, sha) {
    return resolver(axios.get(`${API}/repos/${owner}/${repo}/git/blobs/${sha}`));
  }
}

export default Api;
