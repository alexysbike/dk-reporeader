/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
} from 'sophia-components';
import { Navbar as NavbarBlu, NavbarGroup, Classes } from '@blueprintjs/core';
import logo from '../../assets/img/logo.png';

const Navbar = () => (
  <NavbarBlu style={{ marginBottom: 10 }}>
    <Container fluid className="app-navbar-container">
      <NavbarGroup>
        <a className={Classes.NAVBAR_HEADING} style={{ height: '100%' }}>
          <img src={logo} alt="logo" style={{ height: '90%', marginTop: '5%' }} />
        </a>
      </NavbarGroup>
    </Container>
  </NavbarBlu>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
