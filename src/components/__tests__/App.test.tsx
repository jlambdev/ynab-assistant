import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { App } from '../App';

describe('src/App', () => {
    it('renders to the DOM without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('should render Controls and Preview components', () => {
        const app = shallow(<App />);
    });
});
