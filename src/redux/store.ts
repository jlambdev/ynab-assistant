import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';
import { initialState } from './state';

export default createStore(reducer, initialState, devToolsEnhancer({}));
