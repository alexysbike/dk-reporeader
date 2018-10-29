/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import { MenuItem, Button } from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';
import { IconNames } from '@blueprintjs/icons';

const itemListPredicate = (query, items) =>
  items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
    || item.code.toLowerCase().includes(query.toLowerCase()));

const itemRenderer = (item, { handleClick, modifiers }) =>
  (
    <MenuItem
      active={modifiers.active}
      key={item._id}
      label={item.code}
      onClick={handleClick}
      text={item.name}
    />
  );

const P = withHandlers({
  onItemSelect: ({ additionalData, onChange }) => item => onChange(item, additionalData),
});

const Select = ({ items, onItemSelect, selected, icon, disabled }) => (
  <BlueSelect
    items={items}
    itemRenderer={itemRenderer}
    itemListPredicate={itemListPredicate}
    onItemSelect={onItemSelect}
  >
    <Button
      icon={icon}
      rightIcon={IconNames.CARET_DOWN}
      text={selected ? `${selected.name} (${selected.code})` : '(No selection)'}
      disabled={disabled}
    />
  </BlueSelect>
);

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  additionalData: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.bool,
    PropTypes.shape(),
  ]),
  selected: PropTypes.shape(),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  selected: null,
  icon: null,
  additionalData: undefined,
};

export default attach(P)(Select);
