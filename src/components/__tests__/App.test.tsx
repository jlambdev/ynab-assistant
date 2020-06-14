import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { App } from '../App';
import { Controls } from '../Controls';
import { Preview } from '../Preview';

jest.spyOn(console, 'warn').mockImplementation(() => {});

describe('src/App', () => {
    it('renders to the DOM without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('should render Controls and Preview components', () => {
        const app = shallow(<App />);
        expect(app.find(Controls)).toHaveLength(1);
        expect(app.find(Preview)).toHaveLength(1);
    });
});
