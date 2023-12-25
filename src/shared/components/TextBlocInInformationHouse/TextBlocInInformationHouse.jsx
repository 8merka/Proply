import React from 'react';
import './TextBlocInInformationHouse.scss';

export function TextBlocInInformationHouse(props) {
  return (
    <div className={`textBlocInInformationHouse__block ${props.styleTextBlocInInformationHouse}`}>
      <h1 className={`textBlocInInformationHouse__block__type`} >{props.typeStyleTextBlocInInformationHouse}</h1>
      <p className={`textBlocInInformationHouse__block__price`}>{props.priceStyleTextBlocInInformationHouse}</p>
      <p className={`textBlocInInformationHouse__block__description`}>{props.descriptionStyleTextBlocInInformationHouse}</p>
      <div className={`textBlocInInformationHouse__block__container`} >
        <p className={`textBlocInInformationHouse__block__container__carSpace`}>Car places:{props.carSpaceStyleTextBlocInInformationHouse}</p>
        <p className={`textBlocInInformationHouse__block__container__bedrooms`}>Bedrooms:{props.bedroomsStyleTextBlocInInformationHouse}</p>
        <p className={`textBlocInInformationHouse__block__container__bathrooms`}>Bathrooms:{props.bathroomsStyleTextBlocInInformationHouse}</p>
      </div>
      <p className={`textBlocInInformationHouse__block__adress`}>{props.adressStyleTextBlocInInformationHouse}</p>
    </div>
  );
}

