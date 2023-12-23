import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import {ForgotPasswordModal} from '../../shared/components/ForgotPasswordModal/ForgotPasswordModal';
import toast from 'react-hot-toast';

import './LogInPage.scss'

export function LogInPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = async (e) => {
        if (login.trim() === "" || password.trim() === "") {
            toast.error('Поля не должны быть пустыми');
        } else {
            try {
                const response = await fetch('http://localhost:8000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login,
                        password,
                    }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('authorization', '1');
                    localStorage.setItem('id', data.id);
                    navigate('/main');
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.error);
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        }
    };
    

    async function handleRegClick() {
            navigate("/reg");
    }
    return (
        <div className="logInPage__body">
            <Header></Header>
            {/* <Form>

            </Form> */}

            <div className="logInPage__body__form__proply"> proply </div>
            <div className="logInPage__body__form__welcome">Welcom back!</div>
            <div className="logInPage__body__form__loginAccount">Login in your account</div>

            <Form inputs={[
            { placeholder: '  Login', styleInput: 'logInPage__body__form__login', value: login, onChange: e => setLogin(e.target.value) },
            { placeholder: '  Password', styleInput: 'logInPage__body__form__password', value: password, onChange: e => setPassword(e.target.value) },
            ]} />
            <div className="forgot-password" onClick={openModal}>Forgot Password?</div>
            
            <Button
                styleButton="logInPage__body__form__button"
                wordButton="Sign in"
                type="submit"
                onClick={handleLogin}
            />
            <ForgotPasswordModal isOpen={isModalOpen} onClose={closeModal} />
            {/* <button  > */}
            <div className="logInPage__body__form__dont" >Don’t have an account? <div className="logInPage__body__form__dont__sing" onClick={handleRegClick}>Sign up here</div> </div>
            {/* </button> */}

            <Footer></Footer>
        </div>
    );
}