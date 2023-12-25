import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from '../shared/components/Form/Form';

test('renders correctly', () => {
  const inputs = [
    { type: 'text', name: 'test1', value: 'Test 1' },
    { type: 'text', name: 'test2', value: 'Test 2' },
  ];

  const tree = renderer
    .create(<Form inputs={inputs} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
