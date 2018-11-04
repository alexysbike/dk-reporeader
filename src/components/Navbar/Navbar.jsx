/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'sophia-components';
import { Navbar as NavbarBlu, NavbarGroup, Classes, Alignment, Button, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import logo from '../../assets/img/logo.png';
import AuthService from '../../services/auth';

const P = withHandlers({
  logout: (useless, { dispatch }) => () => {
    localStorage.removeItem('github-login-access_token');
    dispatch.app.setIsLogged(false);
  },
});

const Navbar = ({ isLogged, logout }) => (
  <NavbarBlu style={{ marginBottom: 10 }}>
    <Container fluid className="app-navbar-container">
      <NavbarGroup>
        <a className={Classes.NAVBAR_HEADING} style={{ height: '100%' }}>
          <img src={logo} alt="logo" style={{ height: '90%', marginTop: '5%' }} />
        </a>
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
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

const mapStateToProps = state => ({
  isLogged: state.app.isLogged,
});

export default connect(mapStateToProps)(attach(P)(Navbar));
