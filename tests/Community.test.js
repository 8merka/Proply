import React from 'react';
import renderer from 'react-test-renderer';
import { Community } from '../shared/components/Community/Community';

test('renders correctly', () => {
  const props = {
    styleCommunity: 'test-style',
    image: 'test-image.jpg',
    styleImage: 'test-image-style',
    styleName: 'test-name-style',
    name: 'Test Name',
    styleText: 'test-text-style',
    text: 'Test Text',
  };

  const tree = renderer
    .create(<Community {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
