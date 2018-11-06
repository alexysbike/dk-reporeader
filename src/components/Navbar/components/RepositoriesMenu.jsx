import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const RepositoriesMenu = ({ repositories, onClick }) => (
  <Popover>
    <Button
      text="Repositories"
      icon={IconNames.LIST}
      rightIcon={IconNames.CARET_DOWN}
      minimal
    />
    <Menu>
      {repositories.map(repo => (
        <MenuItem
          key={repo.fullName}
          text={repo.fullName}
          onClick={() => onClick(repo)}
        />
      ))}
    </Menu>
  </Popover>
);

RepositoriesMenu.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onClick: PropTypes.func,
};

RepositoriesMenu.defaultProps = {
  onClick: () => {},
};

const mapStateToProps = state => ({
  repositories: state.app.repositories,
});

export default connect(mapStateToProps)(RepositoriesMenu);
