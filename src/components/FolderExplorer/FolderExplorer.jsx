/* eslint-disable react/no-unused-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tree } from '@blueprintjs/core';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import treeModel from '../../modules/tree';


const P = withHandlers({
  expanseHandler: ({ additionalData }, { dispatch }) => ({ id: sha, parent, type }) => {
    const resolve = () => dispatch.tree.setKeyAdditionalData({ sha, key: 'isExpanded', value: true });
    if (!additionalData[sha]) {
      dispatch.tree.getItem({ sha, parent, type });
    } else {
      resolve();
    }
  },
  collapseHandler: ({ additionalData }, { dispatch }) => ({ id: sha, parent, type }) => {
    const resolve = () => dispatch.tree.setKeyAdditionalData({ sha, key: 'isExpanded', value: false });
    if (!additionalData[sha]) {
      dispatch.tree.getItem({ sha, parent, type });
    } else {
      resolve();
    }
  },
  clickHandler: ({ treeNodes, tabs }, { dispatch }) => ({ id: sha, parent, type, path }) => {
    if (type === 'blob') {
      if (!treeNodes[sha]) {
        dispatch.tree.getItem({ sha, parent, type });
      }
      dispatch.tree.setSelectedSha(sha);
      dispatch.tree.setSelectedName(path);
      if (!tabs.includes(sha)) {
        dispatch.app.addTabs([sha]);
      }
    }
  },
});

const FolderExplorer = ({ nodes, expanseHandler, collapseHandler, clickHandler }) => (
  <Fragment>
    <Tree
      contents={nodes}
      onNodeCollapse={collapseHandler}
      onNodeExpand={expanseHandler}
      onNodeClick={clickHandler}
    />
  </Fragment>
);

FolderExplorer.propTypes = {
  treeNodes: PropTypes.shape().isRequired,
  additionalData: PropTypes.shape().isRequired,
  nodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  root: PropTypes.string,
  branch: PropTypes.string.isRequired,
  expanseHandler: PropTypes.func.isRequired,
  collapseHandler: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

FolderExplorer.defaultProps = {
  root: null,
};

const mapStateToProps = state => ({
  treeNodes: state.tree.treeNodes,
  additionalData: state.tree.additionalData,
  root: state.tree.root,
  branch: state.app.branch,
  tabs: state.app.tabs,
  nodes: treeModel.selectors.treeContentSelector(state),
});

export default connect(mapStateToProps)(attach(P)(FolderExplorer));
