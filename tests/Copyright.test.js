import React from 'react';
import renderer from 'react-test-renderer';
import { Copyright } from '../shared/components/Copyright/Copyright';

describe('Copyright', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Copyright copyrightStyle="style" copyrightWord="word" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
