import Api from '../../services/api';

const effects = {
  async getItem({ sha, parent, type, resolve }, { app: { owner, repo } }) {
    const tree = type === 'tree'
      ? await Api.getTree(owner, repo, sha)
      : await Api.getBlob(owner, repo, sha);
    this.setAdditionalData({ sha: tree.sha, isExpanded: true });
    this.setTreeNode({ ...tree, parent });
    if (!parent) {
      this.setRoot(tree.sha);
    }
    if (resolve) resolve();
  },
};

export default effects;
