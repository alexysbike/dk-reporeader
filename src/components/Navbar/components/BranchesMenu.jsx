import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const BranchesMenu = ({ branch, branches, onBranchClick }) => (
  <Popover>
    <Button
      text={branch}
      icon={IconNames.GIT_BRANCH}
      rightIcon={IconNames.CARET_DOWN}
      minimal
    />
    <Menu>
      {branches.map(name => (
        <MenuItem
          key={name}
          text={name}
          active={name === branch}
          onClick={() => onBranchClick(name)}
        />
      ))}
    </Menu>
  </Popover>
);

BranchesMenu.propTypes = {
  onBranchClick: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
  branches: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BranchesMenu.defaultProps = {};

const mapStateToProps = state => ({
  branch: state.app.branch,
  branches: state.app.branches,
});

export default connect(mapStateToProps)(BranchesMenu);
