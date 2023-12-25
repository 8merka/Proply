import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';
import angles from "../../image/angles.png"

import { TextBlocInInformationHouse } from '../../shared/components/TextBlocInInformationHouse/TextBlocInInformationHouse';
import { Button } from '../../shared/components/Button/Button';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";

import { fetchHouseInfo } from './fetchHouseInfo';
import { createPdf } from './createPdf';
import { deleteHouseAndRedirect } from './deleteHouseAndRedirect';

import './InformationDesign.scss';

export function InformationDesign() {
    const { id } = useParams();
    const [houseInfo, setHouseInfo] = useState(null);
    const [typeData, setTypeData] = useState(null);
    const [sellerData, setSellerData] = useState(null);
    const [consultantData, setConsultantData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenToo, setIsOpenToo] = useState(false);

    let navigate = useNavigate();
    let user_id = localStorage.getItem('id');

    useEffect(() => {
        if (id) {
            fetchHouseInfo(id, setHouseInfo, setTypeData, setSellerData, setConsultantData, setUserData);
        }
    }, [id]);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleOpenToo = () => setIsOpenToo(true);
    const handleCloseToo = () => setIsOpenToo(false);
    const handleConfirmed = () => {
        deleteHouseAndRedirect(id, navigate);
        setIsOpen(false);
    };

return (
    <div className="informationHouse__body">
        <Header />
        <main className="informationHouse__main">
            <div className="informationHouse__main__container">
                <div className="informationHouse__main__container__pictures">
                    <img src={angles} alt="design" className="informationHousemaincontainer__pictures__img"></img>
                </div>
                <div className="informationHouse__main__container__textBlock">
                    {houseInfo && typeData && (
                        <TextBlocInInformationHouse
                            typeStyleTextBlocInInformationHouse={typeData.type}
                            priceStyleTextBlocInInformationHouse={houseInfo.price}
                            descriptionStyleTextBlocInInformationHouse={houseInfo.description}
                            carSpaceStyleTextBlocInInformationHouse={houseInfo.car_space}
                            bedroomsStyleTextBlocInInformationHouse={houseInfo.bedrooms_number}
                            bathroomsStyleTextBlocInInformationHouse={houseInfo.bathrooms_number}
                            adressStyleTextBlocInInformationHouse={houseInfo.addres}
                        />
                    )}
                    <div className="informationHouse__main__container__textBlock__buttons">
                    { consultantData &&(
                        <>
                         <Button
                            styleButton="informationHouse__button"
                            wordButton="Get Contact"
                            onClick={handleOpenToo}
                        /> 
                        <Button
                        styleButton="informationHouse__button"
                        wordButton="Dowload Information"
                        onClick={createPdf}
                    />
                        <Popup className="popupToDelete" open={isOpenToo} closeOnDocumentClick onClose={handleCloseToo}>
                                    <div className="popup__content">
                                        <h2>{consultantData.phone}</h2>
                                        <Button
                                    styleButton="informationHouse__button"
                                    wordButton="Ok"
                                    onClick={handleCloseToo}
                                    />
                                    </div>
                       </Popup>
                    </>
                    )}
                        {(user_id == sellerData?.id || userData?.role_id == 2) && (
                            <>

                                <Button
                                    styleButton="informationHouse__button__delete"
                                    wordButton="?"
                                    onClick={handleOpen}
                                />

                                <Popup className="popupToDelete" open={isOpen} closeOnDocumentClick onClose={handleClose}>
                                    <div className="popup__content">
                                        <h2>Are you sure you want to delete?</h2>
                                        <Button
                                    styleButton="informationHouse__button"
                                    wordButton="Yes"
                                    onClick={handleConfirmed}
                                />
                                <Button
                                    styleButton="informationHouse__button"
                                    wordButton="No"
                                    onClick={handleClose}
                                />
                                    </div>
                                </Popup>
                            </>)}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

}
