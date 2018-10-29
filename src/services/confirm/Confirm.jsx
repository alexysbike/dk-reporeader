/* eslint-disable react/no-render-return-value,class-methods-use-this */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Alert } from '@blueprintjs/core';

let resolve;
class Confirm extends Component {
  static create(props = {}) {
    const containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    return ReactDOM.render(<Confirm createAlertProps={props} />, containerElement);
  }

  constructor() {
    super();

    this.state = {
      isOpen: false,
      showAlertProps: {},
    };

    this.handleMoveCancel = this.handleMoveCancel.bind(this);
    this.handleMoveConfirm = this.handleMoveConfirm.bind(this);
    this.show = this.show.bind(this);
  }

  handleMoveCancel() {
    this.setState({ isOpen: false });
    resolve(false);
  }

  handleMoveConfirm() {
    this.setState({ isOpen: false });
    resolve(true);
  }

  show(props = {}) {
    const showAlertProps = { ...this.props.createAlertProps, ...props };
    this.setState({ isOpen: true, showAlertProps });
    return new Promise((res) => {
      resolve = res;
    });
  }

  render() {
    const { isOpen, showAlertProps } = this.state;
    const { message, ...rest } = showAlertProps;
    return (
      <Alert
        isOpen={isOpen}
        cancelButtonText="Cancel"
        confirmButtonText="OK"
        onCancel={this.handleMoveCancel}
        onConfirm={this.handleMoveConfirm}
        {...rest}
      >
        {message}
      </Alert>
    );
  }
}

Confirm.propTypes = {
  createAlertProps: PropTypes.shape(),
};

Confirm.defaultProps = {
  createAlertProps: {},
};

export default Confirm;
