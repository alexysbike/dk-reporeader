import React from 'react';
import { Container, Columns, Column } from 'sophia-components';
import { didSubscribe } from 'proppy';
import { attach } from 'proppy-react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import FolderExplorer from './components/FolderExplorer';
import Editor from './components/Editor';
import { getQueryVariable } from './utils/helpers';

const P = didSubscribe(({ branch: defaultBranch }, { dispatch }) => {
  const code = getQueryVariable('code');
  const state = getQueryVariable('state');
  if (code && state) {
    dispatch.app.generateToken({ code, state });
  }

  const _repo = getQueryVariable('repo');
  if (_repo) {
    const parts = _repo.split('/');
    const owner = parts[3];
    const repo = parts[4];
    if (owner && repo) {
      dispatch.app.setOwner(owner);
      dispatch.app.setRepo(repo);
    }
  }

  // Opening repository coming from query params
  const _branch = getQueryVariable('branch');
  const branch = _branch || defaultBranch;
  dispatch.app.setBranch(branch);
  const resolve = () =>
    dispatch.tree.getItem({ parent: null, type: 'tree' });
  dispatch.app.getRepo({ resolve, useDefault: !_branch });
});

const App = () => (
  <div className="app-container">
    <Navbar />
    <Container
      fluid
      style={{
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 67,
      }}
    >
      <Columns style={{ height: '100%' }}>
        <Column three>
          <FolderExplorer />
        </Column>
        <Column nine>
          <div style={{ width: '100%', height: '100%' }}>
            <Editor />
          </div>
        </Column>
      </Columns>
    </Container>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

const mapStateToProps = state => ({ branch: state.app.branch });

export default connect(mapStateToProps)(attach(P)(App));
