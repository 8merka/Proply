import React from 'react';
import renderer from 'react-test-renderer';
import { TextBlock } from '../shared/components/TextBlock/TextBlock';

describe('TextBlock', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<TextBlock styleTextBlock="style" title="title" styleTitle="style" text="text" styleText="style" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
