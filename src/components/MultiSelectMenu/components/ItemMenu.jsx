import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import { MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const P = withHandlers({
  onClick: ({ item, onItemClick }) => event => onItemClick(item, event),
});

const ItemMenu = ({ item, onClick, isSelected }) => (
  <MenuItem
    icon={isSelected ? IconNames.TICK : IconNames.BLANK}
    onClick={onClick}
    text={item.name}
    label={item.code}
    key={item._id}
    shouldDismissPopover={false}
  />
);

ItemMenu.propTypes = {
  item: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  onItemClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

ItemMenu.defaultProps = {
  isSelected: false,
  onItemClick: () => {},
};

export default attach(P)(ItemMenu);
