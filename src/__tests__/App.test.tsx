/* eslint-disable jest/expect-expect */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from '../App';

describe('main application', () => {
    it('should render without crashing', () => {
        const store = configureStore([])({ data: [] });
        const div = document.createElement('div');

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            div,
        );
    });
});
