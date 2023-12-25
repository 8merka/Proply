import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderText } from '../shared/components/HeaderText/HeaderText';

describe('HeaderText', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<HeaderText style="style" word="word" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
