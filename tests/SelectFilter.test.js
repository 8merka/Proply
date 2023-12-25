import React from 'react';
import renderer from 'react-test-renderer';
import { SelectFilter } from '../shared/components/SelectFilter/SelectFilter';

describe('SelectFilter', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SelectFilter 
                styleSelectFilter="style" 
                value="0" 
                optionWordName="Option 1" 
                optionWord="Option 2" 
                optionWord2="Option 3" 
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
