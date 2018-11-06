/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'sophia-components';
import { Navbar as NavbarBlu, NavbarGroup, Classes, Alignment, Button, Intent, NavbarDivider } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { connect } from 'react-redux';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import logo from '../../assets/img/logo.png';
import AuthService from '../../services/auth';
import BranchesMenu from './components/BranchesMenu';

const P = withHandlers({
  logout: (useless, { dispatch }) => () => {
    localStorage.removeItem('github-login-access_token');
    dispatch.app.setIsLogged(false);
  },
  goRepo: ({ owner, repo }) => () => {
    window.open(`https://github.com/${owner}/${repo}`, '_blank');
  },
  onBranchClick: (useless, { dispatch }) => (branch) => {
    dispatch.app.setBranch(branch);
    dispatch.tree.getItem({ parent: null, type: 'tree' });
  },
});

const Navbar = ({ isLogged, logout, owner, repo, goRepo, onBranchClick }) => (
  <NavbarBlu style={{ marginBottom: 10 }}>
    <Container fluid className="app-navbar-container">
      <NavbarGroup>
        <a className={Classes.NAVBAR_HEADING} style={{ height: '100%' }}>
          <img src={logo} alt="logo" style={{ height: '90%', marginTop: '5%' }} />
        </a>
        <NavbarDivider />
        <Button
          text={`${owner}/${repo}`}
          onClick={goRepo}
          icon={IconNames.GIT_REPO}
          minimal
        />
        <BranchesMenu onBranchClick={onBranchClick} />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {!isLogged ? (
          <Button text="Login in Github" intent={Intent.SUCCESS} onClick={AuthService.initialize} />
        ) : (
          <Button text="Logout" onClick={logout} />
        )}
      </NavbarGroup>
    </Container>
  </NavbarBlu>
);

Navbar.propTypes = {
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  goRepo: PropTypes.func.isRequired,
  onBranchClick: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

const mapStateToProps = state => ({
  isLogged: state.app.isLogged,
  owner: state.app.owner,
  repo: state.app.repo,
});

export default connect(mapStateToProps)(attach(P)(Navbar));
