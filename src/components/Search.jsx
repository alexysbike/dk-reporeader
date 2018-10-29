import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import { InputGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { translate } from '../services/translation';

let debounce;
const P = withHandlers({
  onInputChange: ({ onChange }) => (event) => {
    if (onChange) {
      const { target: { value } } = event;
      if (debounce) {
        clearTimeout(debounce);
      }
      debounce = setTimeout(() => onChange(value, event), 450);
    }
  },
});

const Search = ({ onInputChange, searchTerm, t }) => (
  <InputGroup
    leftIcon={IconNames.SEARCH}
    type="search"
    placeholder={t('Search...')}
    onChange={onInputChange}
    defaultValue={searchTerm}
  />
);

Search.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

Search.defaultProps = {};

export default translate()(attach(P)(Search));
