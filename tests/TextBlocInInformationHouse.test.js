import React from 'react';
import renderer from 'react-test-renderer';
import { TextBlocInInformationHouse } from '../shared/components/TextBlocInInformationHouse/TextBlocInInformationHouse';

test('renders correctly', () => {
  const props = {
    styleTextBlocInInformationHouse: 'test-style',
    typeStyleTextBlocInInformationHouse: 'Test Type',
    priceStyleTextBlocInInformationHouse: '1000',
    descriptionStyleTextBlocInInformationHouse: 'Test Description',
    carSpaceStyleTextBlocInInformationHouse: '2',
    bedroomsStyleTextBlocInInformationHouse: '3',
    bathroomsStyleTextBlocInInformationHouse: '1',
    adressStyleTextBlocInInformationHouse: 'Test Address',
  };

  const tree = renderer
    .create(<TextBlocInInformationHouse {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
