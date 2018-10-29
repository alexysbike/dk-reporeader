import React from 'react';
import TranslateService from './service';

const translate = () => Component => props => (<Component t={TranslateService.t} {...props} />);

export default translate;
