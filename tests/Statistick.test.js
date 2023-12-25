import React from 'react';
import renderer from 'react-test-renderer';
import { Statistick } from '../shared/components/Statistick/Statistick';

test('renders correctly', () => {
  const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
  const tree = renderer
    .create(<Statistick titles={titles} texts={texts} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
