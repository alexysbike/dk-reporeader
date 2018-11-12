import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@blueprintjs/core';
import { connect } from 'react-redux';

const FileTabs = ({ tabs }) => (!tabs.length ? null : (
  <Tabs>
    {tabs.map(tab => (
      <Tab id={tab} title={tab} key={tab} />
    ))}
  </Tabs>
));

FileTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FileTabs.defaultProps = {};

const mapStateToProps = state => ({
  tabs: state.app.tabs,
});

export default connect(mapStateToProps)(FileTabs);
