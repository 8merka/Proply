import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../shared/components/Input/Input';

describe('Input', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Input styleInput="style" placeholder="Placeholder" value="Value" onChange={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
