import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../shared/components/Footer/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Footer />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
