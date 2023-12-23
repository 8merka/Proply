import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import toast from 'react-hot-toast';

import './RegistrationPage.scss'

export function RegistrationPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const handleRegistration = async () => {
        console.log('1')
        try {
            if (name.trim() === "" || login.trim() === "" || password.trim() === "" || city.trim() === "" || phone.trim() === "" || email.trim() === "") {
                toast.error('Поля не должны быть пустыми');
            }

            if (!isEmailValid || !isPhoneValid) {
                if (!isEmailValid && !isPhoneValid) {
                    toast.error('Неверный формат почты и номера')
                }
                else if (!isEmailValid) {
                    toast.error('Неверный формат почты')
                }
                else {
                    toast.error('Неверный формат номера')
                }
                return;
            }
            else {
                const response = await fetch('http://localhost:8000/api/PostUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        login,
                        password,
                        city,
                        phone,
                        email,
                    }),
                });

                if (response.ok) {
                   const data = await response.json();
                    if (data.message) {
                        toast.success(data.message);
                    } else {
                        toast.error('Сообщение отсутствует в ответе сервера');
                    }
                    navigate('/main')
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.error);
                }
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <div className="registrationPage__body">
            <Header></Header>

            <div className="registrationPage__body__proply"> proply </div>
            <div className="registrationPage__body__welcome">Welcom!</div>
            <div className="registrationPage__body__loginAccount">Create your account</div>

            <div className="registrationPage__body__formContainer">
                <Form inputs={[
                    { placeholder: '  Full Name', styleInput: 'registrationPage__body__form__name', value: name, onChange: e => setName(e.target.value) },
                    { placeholder: '  Login', styleInput: 'registrationPage__body__form__login', value: login, onChange: e => setLogin(e.target.value) },
                    { placeholder: '  Password', styleInput: 'registrationPage__body__form__password', value: password, onChange: e => setPassword(e.target.value) },
                ]} />

                <Form inputs={[
                    { placeholder: '  City', styleInput: 'registrationPage__body__form__city', value: city, onChange: e => setCity(e.target.value) },
                    { placeholder: '  Email',
                        styleInput: 'registrationPage__body__form__email',
                        value: email,
                        onChange: (e) => {
                        setEmail(e.target.value);
                        setIsEmailValid(
                                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)
                            );
                        },
                        type: 'email',
                    },
                    {
                        placeholder: '  Phone Number',
                        styleInput: 'registrationPage__body__form__number',
                        value: phone,
                        onChange: (e) => {
                            setPhone(e.target.value);
                            setIsPhoneValid(/^\+375[0-9]{9}$/.test(e.target.value));
                        },
                        type: 'tel',
                    }
                ]} />

            </div>
            <Button
                styleButton="registrationPage__body__form__button"
                wordButton="Sign un"
                type="submit"
                onClick={handleRegistration}
            />
            <Footer></Footer>
        </div>
    );



    // return (
    //     <div className="logInPage__body">
    //         <Header></Header>
    //         <form className="logInPage__body__form">
    //             <div  className="logInPage__body__form__intra"> INTRA </div>
    //             <div className="logInPage__body__form__create">Create your dream house</div>
    //             <Input placeholder="Login" style="logInPage__body__form__login"></Input>
    //             <Input placeholder="Password" style="logInPage__body__form__password" ></Input>
    //             <Button style="logInPage__body__form__button" word="Sign in"></Button>

    //             <div className="logInPage__body__form__dont">Don’t have an account? Sign up here</div>
    //         </form>
    //        <Footer></Footer>
    //     </div>
    // )
}