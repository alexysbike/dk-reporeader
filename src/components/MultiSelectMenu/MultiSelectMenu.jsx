import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers, compose, didSubscribe, withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import {
  Menu,
  MenuItem,
  InputGroup,
  Tag,
  Intent,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import ItemMenu from './components/ItemMenu';
import { filterByKey } from '../../utils/helpers';
import { translate } from '../../services/translation';

let _input;
const P = compose(
  withStateHandlers({
    search: '',
  }, {
    setSearch: () => ({ target: { value: search } }) => ({ search }),
  }),
  withHandlers({
    onAllTagClick: ({ items, onAllClick }) => event => onAllClick(items, event),
  }),
  didSubscribe(() => {
    _input.focus(_input);
  }),
);

const MultiSelectMenu = ({
  t,
  onItemClick,
  onAllClick,
  onAllTagClick,
  onNoneClick,
  selectedItems,
  items: rawItems,
  search,
  setSearch,
  shortList,
}) => {
  const items = rawItems.filter(filterByKey(search));
  const searchInput = (
    <InputGroup
      className="search-input"
      leftIcon={IconNames.SEARCH}
      type="search"
      placeholder={t('Search')}
      value={search}
      onChange={setSearch}
      inputRef={(input) => {
        _input = input;
      }}
    />
  );
  const tagProps = {
    className: 'tag-button',
    interactive: true,
    round: true,
    intent: Intent.PRIMARY,
  };
  const buttons = [];
  if (onNoneClick) {
    buttons.push(
      <Tag
        key="multi-select-menu-none"
        onClick={onNoneClick}
        {...tagProps}
      >
        {t('None')}
      </Tag>,
    );
  }
  if (onAllClick) {
    buttons.push(
      <Tag
        key="multi-select-menu-all"
        onClick={onAllTagClick}
        {...tagProps}
      >
        {t('All')}
      </Tag>,
    );
  }
  const buttonsRow = !buttons.length ? null : (
    <MenuItem
      className="multi-select-menu-buttons"
      text={buttons}
      shouldDismissPopover={false}
    />
  );
  return (
    <Menu className="multi-select-menu">
      {buttonsRow}
      <MenuItem
        text={searchInput}
        shouldDismissPopover={false}
      />
      <div className={`${shortList ? 'short-list' : ''} item-list`}>
        {items.map(item => (
          <ItemMenu
            item={item}
            key={item._id}
            isSelected={selectedItems.includes(item._id)}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </Menu>
  );
};

MultiSelectMenu.propTypes = {
  t: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
  onNoneClick: PropTypes.func,
  onAllClick: PropTypes.func,
  shortList: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  onAllTagClick: PropTypes.func.isRequired,
};

MultiSelectMenu.defaultProps = {
  selectedItems: [],
  onItemClick: () => {},
  onNoneClick: null,
  shortList: false,
  onAllClick: null,
};

export default translate()(
  attach(P)(MultiSelectMenu),
);
