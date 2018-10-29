/* eslint-disable no-nested-ternary */
import { createSelector } from 'reselect';
import { map, compose, sort } from 'ramda';

const sortByType = sort((a, b) => {
  if (a.type === 'tree' && b.type === 'blob') {
    return -1;
  }
  if (b.type === 'tree' && a.type === 'blob') {
    return 1;
  }
  return 0;
});

const nodeMapMaker = (nodes, data, selectedSha, parent) => compose(
  map((dummyNode) => {
    const isExpanded = !!data[dummyNode.sha] && data[dummyNode.sha].isExpanded;
    const isSelected = selectedSha === dummyNode.sha;
    const nodeComponent = {
      id: dummyNode.sha,
      label: dummyNode.path,
      path: dummyNode.path,
      type: dummyNode.type,
      hasCaret: dummyNode.type === 'tree',
      icon: dummyNode.type === 'blob'
        ? 'document'
        : !isExpanded
          ? 'folder-close'
          : 'folder-open',
      parent,
      isExpanded,
      isSelected,
    };
    const nodeMap = nodeMapMaker(nodes, data, selectedSha, dummyNode.sha);
    const node = nodes[dummyNode.sha];
    const childNodes = !node || !node.tree ? undefined : nodeMap(node.tree);
    return { ...nodeComponent, childNodes };
  }),
  sortByType,
);

export const treeNodesSelector = state => state.tree.treeNodes;
export const additionalDataSelector = state => state.tree.additionalData;
export const rootSelector = state => state.tree.root;
export const selectedShaSelector = state => state.tree.selectedSha;
export const selectedNameSelector = state => state.tree.selectedName;

export const treeContentSelector = createSelector(
  treeNodesSelector,
  additionalDataSelector,
  rootSelector,
  selectedShaSelector,
  (nodes, data, root, selectedSha) => {
    if (!root) {
      return [];
    }
    const rootNode = nodes[root];
    const isExpanded = !!data[rootNode.sha] && data[rootNode.sha].isExpanded;
    const rootComponent = {
      id: rootNode.sha,
      hasCaret: true,
      icon: 'folder-close',
      label: 'root',
      isExpanded,
    };
    const nodeMap = nodeMapMaker(nodes, data, selectedSha, rootNode.sha);
    const childNodes = !rootNode.tree ? undefined : nodeMap(rootNode.tree);
    return [{ ...rootComponent, childNodes }];
  },
);

export const selectedNodeSelector = createSelector(
  treeNodesSelector,
  selectedShaSelector,
  (treeNodes, selectedSha) => selectedSha && treeNodes[selectedSha],
);
