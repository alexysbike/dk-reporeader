/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import treeModel from '../../modules/tree';

const languages = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  json: 'json',
  yaml: 'yaml',
  html: 'html',
  css: 'css',
  scss: 'scss',
  saas: 'saas',
  php: 'php',
  md: 'markdown',
};

const Editor = ({ selectedSha, selectedNode, selectedName }) => {
  const code = !selectedSha
    ? null
    : !selectedNode
      ? 'Loading...'
      : selectedNode.encoding !== 'base64'
        ? selectedNode.content
        : window.atob(selectedNode.content);
  const options = { selectOnLineNumbers: true };
  const nameParts = selectedName && selectedName.split('.');
  const extension = nameParts && nameParts[nameParts.length - 1];
  const language = languages[extension] || 'plaintext';
  return (
    <MonacoEditor
      language={language}
      theme="vs-dark"
      value={code}
      options={options}
    />
  );
};

Editor.propTypes = {
  selectedSha: PropTypes.string,
  selectedName: PropTypes.string,
  selectedNode: PropTypes.shape(),
};

Editor.defaultProps = {
  selectedSha: null,
  selectedName: null,
  selectedNode: null,
};

const mapStateToProps = state => ({
  selectedSha: treeModel.selectors.selectedShaSelector(state),
  selectedName: treeModel.selectors.selectedNameSelector(state),
  selectedNode: treeModel.selectors.selectedNodeSelector(state),
});

export default connect(mapStateToProps)(Editor);
