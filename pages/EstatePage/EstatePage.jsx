import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { EstateCard } from '../../shared/components/EstateCard/EstateCard';
import { SelectFilter } from "../../shared/components/SelectFilter/SelectFilter";
import { Button } from '../../shared/components/Button/Button';
import DesignHoume from "../../image/designHoume.png"
import toast from 'react-hot-toast';
import { BrowserRouter as Router } from "react-router-dom";

import './EstatePage.scss'

export function EstatePage() {
    const [estateObjects, setEstateObjects] = useState([]);
    const [selectedState, setSelectedState] = useState("0");
    const [selectedType, setSelectedType] = useState("0");
    const [selectedCount, setSelectedCount] = useState("0");

    let navigate = useNavigate();

    async function GetRealeEstateObjectBySellerID(state=0, type=0, price = 0) {
        try {
            let response = await fetch(`http://localhost:8000/api/GetAllObjects${state}${type}${price}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                console.log(response)
                let objects = await response.json();
                setEstateObjects(objects);
            } 
        } catch (error) { 
            console.error('Ошибка:', error); 
        } 
    } 

    useEffect(() => {
        GetRealeEstateObjectBySellerID(selectedState, selectedType, selectedCount);
    }, [selectedState, selectedType, selectedCount]);

    const handleStateChange = (value) => {
        setSelectedState(value);
    };

    const handleTypeChange = (value) => {
        setSelectedType(value);
    };

    const handleCountChange = (value) => {
        setSelectedCount(value);
    };

    return (
        <div className="estatePage__body">
            <Header></Header>
            <div className="estatePage__body__container">
                <div className="estatePage__body__container__select">
                    <SelectFilter
                        optionWordName="State"
                        optionWord2="sold"
                        optionWord3="sale"
                        value={selectedState}
                        onChange={handleStateChange}
                    />
                    <SelectFilter
                        optionWordName="Type"
                        optionWord2="house"
                        optionWord3="flats"
                        optionWord4="cottage"
                        value={selectedType}
                        onChange={handleTypeChange}
                    />
                    <SelectFilter
                        optionWordName="Count"
                        optionWord1="chip"
                        optionWord2="expensive"
                        value={selectedCount}
                        onChange={handleCountChange}
                    />
                </div>
            </div>
            <main className="estatePage__body__main">
                <div className="estates_container">
                    {estateObjects.map(object => (
                        // <Router>
                            <EstateCard
                            HoumeImage={DesignHoume}
                                estatePrice={object.price}
                                estateName={object.type}
                                parkingCount={object.car_space}
                                bathroomCount={object.bathrooms_number}
                                estateAdress={object.addres}
                                onClick={() => navigate(`/infDesign/${ object.id }`)}
                            />
                        // </Router>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
