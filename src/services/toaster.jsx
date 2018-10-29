import React from 'react';
import { Toaster, Position, Intent, Spinner, Classes } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const ToasterService = Toaster.create({ position: Position.TOP });

ToasterService.resolve = (key, message) => () => {
  ToasterService.dismiss(key);
  ToasterService.show({
    icon: IconNames.TICK,
    intent: Intent.SUCCESS,
    message,
  });
};

ToasterService.reject = key => (error) => {
  ToasterService.dismiss(key);
  ToasterService.show({
    icon: IconNames.ERROR,
    intent: Intent.DANGER,
    message: error.message,
  });
};

ToasterService.makeResolveReject = (key, message) => ({
  resolve: ToasterService.resolve(key, message),
  reject: ToasterService.reject(key),
});

ToasterService.showLoading = (key, loadingMessage, completeMessage) => {
  ToasterService.show({
    icon: (<Spinner className={Classes.ICON} size={16} />),
    message: loadingMessage,
    timeout: 0,
  }, key);
  return ToasterService.makeResolveReject(key, completeMessage);
};

export default ToasterService;
