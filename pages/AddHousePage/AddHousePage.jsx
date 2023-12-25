import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import {handleUpload} from './handleUpload';
import {handleTypeChange} from './handleTypeChange';
import './AddHousePage.scss'

export function AddHousePage() {
    const navigate = useNavigate();
    const [name, setHouseName] = useState('');
    const [price, setPrice] = useState('');
    const [type_id, setType] = useState('');
    const [description, setDescription] = useState('');
    const [addres, setAddres] = useState('');
    const [bathrooms_number, setBathroom] = useState('');
    const [car_space, setCar] = useState('');
    const [bedrooms_number, setBedroom] = useState('');

    const state = {
        name,
        price,
        type_id,
        description,
        addres,
        bathrooms_number,
        car_space,
        bedrooms_number
    };

    return (
        <div className="addDesignPage__body">
            <Header></Header>

            <div className="addHousePage__body__formContainer">
                <Form formClass="addHousePage__body__formContainer__container__firstForm" inputs={[
                    { placeholder: '  Enter Name', styleInput: 'addHousePage__body__form__designName', value: name, onChange: e => setHouseName(e.target.value) },
                    { placeholder: '  Enter Cost', styleInput: 'addHousePage__body__form__price', value: price, onChange: e => setPrice(e.target.value) }
                ]} />
                <Form formClass="addHousePage__body__formContainer__container__secondForm" inputs={[
                    { placeholder: '  Description', styleInput: 'addHousePage__body__form__description', value:description, onChange: e => setDescription(e.target.value) }
                ]} />
                <select value={type_id} onChange={(event) => handleTypeChange(event, setType)}>
                    <option value=''>Select type</option>
                    <option value='2'>house</option>
                    <option value='3'>flats</option>
                    <option value='4'>cottage</option>
                </select>
                <Form formClass="addHousePage__body__formContainer__container__firstForm" inputs={[
                    { placeholder: '  Car', styleInput: 'addHousePage__body__form__car', value: car_space, onChange: e => setCar(e.target.value) },
                    { placeholder: '  Bed', styleInput: 'addHousePage__body__form__bed', value: bedrooms_number, onChange: e => setBedroom(e.target.value) },
                    { placeholder: '  Bath', styleInput: 'addHousePage__body__form__bath', value: bathrooms_number, onChange: e => setBathroom(e.target.value) }
                ]} />
                <Form formClass="addHousePage__body__formContainer__container__firstForm" inputs={[
                    { placeholder: '  Addres', styleInput: 'addHousePage__body__form__addres', value: addres, onChange: e => setAddres(e.target.value) }
                ]} />
            </div>

            <Button
                styleButton="addHousePage__body__form__button"
                wordButton="Save"
                type="submit"
                onClick={() => handleUpload(state, navigate)}
            />

            <Footer></Footer>
        </div>
    );
}
