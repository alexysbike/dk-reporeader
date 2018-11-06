import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { IconNames } from '@blueprintjs/icons';

const itemPredicate = (query, repo) =>
  repo.fullName.toLowerCase().indexOf(query.toLowerCase()) >= 0;

const itemRenderer = (repo, { handleClick }) => (
  <MenuItem
    key={repo.fullName}
    text={repo.fullName}
    onClick={() => handleClick(repo)}
  />
);

const RepositoriesMenu = ({ repositories, onClick }) => (
  <Select
    items={repositories}
    itemRenderer={itemRenderer}
    onItemSelect={onClick}
    itemPredicate={itemPredicate}
  >
    <Button
      text="Repositories"
      icon={IconNames.LIST}
      rightIcon={IconNames.CARET_DOWN}
      minimal
    />
  </Select>
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
