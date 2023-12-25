import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import {ForgotPasswordModal} from '../../shared/components/ForgotPasswordModal/ForgotPasswordModal';
import toast from 'react-hot-toast';

import './LogInPage.scss'
import { handleLogin } from './handleLogin';
import { handleRegClick } from './handleRegClick';

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

    return (
        <div className="logInPage__body">
            <Header />
            <div className="logInPage__body__form__proply"> proply </div>
            <div className="logInPage__body__form__welcome">Welcome back!</div>
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
                onClick={() => handleLogin(login, password, navigate)}
            />
            <ForgotPasswordModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="logInPage__body__form__dont" >Don’t have an account? <div className="logInPage__body__form__dont__sing" onClick={() => handleRegClick(navigate)}>Sign up here</div> </div>
            <Footer />
        </div>
    );
}
