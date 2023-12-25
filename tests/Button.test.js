import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../shared/components/Button/Button';

test('renders correctly', () => {
  const props = {
    styleButton: 'test-style',
    wordButton: 'Test Button',
    onClick: jest.fn(),
  };

  const tree = renderer
    .create(<Button {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
