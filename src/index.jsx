import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import selectorPlugin from '@rematch/select';
import { ProppyProvider } from 'proppy-react';
import App from './App';
import models from './modules';
import registerServiceWorker from './registerServiceWorker';
import TranslationService from './services/translation';
import './assets/styles/index.scss';

TranslationService.setLanguage('es');

const select = selectorPlugin({ sliceState: rootState => rootState });
const rematchInit = { models, plugins: [select] };
const store = init(rematchInit);

const { getState, dispatch } = store;
const providers = { getState, dispatch, store };

ReactDOM.render((
  <Provider store={store}>
    <ProppyProvider providers={providers}>
      <App />
    </ProppyProvider>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
