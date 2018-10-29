/* eslint-disable react/no-render-return-value,class-methods-use-this */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Alert, InputGroup, Intent } from '@blueprintjs/core';

let resolve;
class InputPrompt extends Component {
  static create(props = {}) {
    const containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    return ReactDOM.render(<InputPrompt createAlertProps={props} />, containerElement);
  }

  constructor() {
    super();

    this.state = {
      isOpen: false,
      showAlertProps: {},
      dirty: false,
      isValid: false,
      value: '',
      errorMessage: null,
    };

    this.inputGroup = React.createRef();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleMoveCancel = this.handleMoveCancel.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.show = this.show.bind(this);
  }

  onChangeInput({ target: { value } }) {
    const isValid = this.state.validate ? this.state.validate(value) : !!value;
    this.setState({
      dirty: true,
      value,
      isValid,
    });
  }

  handleMoveCancel() {
    this.setState({ isOpen: false, value: '', dirty: false });
    resolve(false);
  }

  handleConfirmClick() {
    const isValid = this.state.validate
      ? this.state.validate(this.state.value)
      : !!this.state.value;
    if (isValid) {
      this.setState({ isOpen: false });
      resolve(this.state.value);
    } else {
      this.setState({
        dirty: true,
        isValid,
      });
    }
  }


  show(props = {}) {
    const joinedShowAlertProps = { ...this.props.createAlertProps, ...props };
    const {
      value, validate, errorMessage, helperMessage, ...showAlertProps
    } = joinedShowAlertProps;
    this.setState({ isOpen: true, showAlertProps, value, validate, errorMessage, helperMessage });
    return new Promise((res) => {
      resolve = res;
    });
  }

  render() {
    const {
      isOpen, showAlertProps, value, dirty, isValid, errorMessage, helperMessage,
    } = this.state;
    const { message, inputGroupProps, ...rest } = showAlertProps;
    const secureInputGroupProps = inputGroupProps || {};
    const intent = dirty && !isValid ? Intent.DANGER : Intent.NONE;
    return (
      <Alert
        isOpen={isOpen}
        cancelButtonText="Cancel"
        confirmButtonText="OK"
        onCancel={this.handleMoveCancel}
        onConfirm={this.handleConfirmClick}
        onOpened={() => this.inputGroup.current.focus()}
        {...rest}
      >
        {message}
        <InputGroup
          value={value}
          onChange={this.onChangeInput}
          intent={intent}
          inputRef={this.inputGroup}
          {...secureInputGroupProps}
        />
        {helperMessage}
        {dirty && !isValid && errorMessage}
      </Alert>
    );
  }
}

InputPrompt.propTypes = {
  createAlertProps: PropTypes.shape(),
};

InputPrompt.defaultProps = {
  createAlertProps: {},
};

export default InputPrompt;
