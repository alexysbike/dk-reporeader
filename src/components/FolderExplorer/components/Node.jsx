import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Collapse } from '@blueprintjs/core';
import { didSubscribe } from 'proppy';
import { attach } from 'proppy-react';

const P = didSubscribe(({ sha, node }, { dispatch }) => {
  if (!node) {
    dispatch.tree.getTree(sha);
  }
});

const Node = ({ name, node }) => (!node ? null : (
  <Fragment>
    <Button
      text={name}
    />
    {node.tree && (
      <Collapse isOpen>
        {node.tree.map(item => (
          <Node
            key={item.sha}
            sha={item.sha}
            name={item.path}
          />
        ))}
      </Collapse>
    )}
  </Fragment>
));

Node.propTypes = {
  node: PropTypes.shape(),
  name: PropTypes.string,
};

Node.defaultProps = {
  node: null,
  name: '',
};

const mapStateToProps = (state, { sha }) => ({
  node: state.tree.treeNodes[sha],
  branch: state.app.branch,
});

export default connect(mapStateToProps)(attach(P)(Node));
