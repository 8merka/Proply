// ForgotPasswordModal.js
import React, { useState } from 'react';
import { Form } from "../Form/Form";
import { Button } from '../Button/Button';
import toast from 'react-hot-toast';
import {handlePasswordRecovery} from './handlePasswordRecovery';
import {resetPassword} from './resetPassword';

import './ForgotPasswordModal.scss'

export function ForgotPasswordModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleClose = () => {
        setIsResettingPassword(false);
        onClose();
    };

    const handlePasswordRecoveryFunc = () => handlePasswordRecovery(email, isEmailValid, setUserData, setIsResettingPassword);
    const resetPasswordFunc = () => resetPassword(userData, password, setIsResettingPassword, onClose);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            {isResettingPassword ? (
                <div className="modal-content">
                    <div className="close-button" onClick={handleClose}>X</div>
                    <h2>Enter your new password</h2>
                    <Form inputs={[
                            { placeholder: '  Password',
                                styleInput: 'forgotForm',
                                value: password,
                                onChange: e => setPassword(e.target.value),
                                type: 'password',
                            }]}/>
                    <Button
                        styleButton="forgotButton"
                        wordButton="Reset password"
                        type="submit"
                        onClick={resetPassword(userData, password, setIsResettingPassword, onClose)}
                    />
                </div>
            ) : (
                <div className="modal-content">
                    <div className="close-button" onClick={handleClose}>X</div>
                    <h2>Enter your email to recover your password</h2>
                    <Form inputs={[
                            { placeholder: '  Email',
                                styleInput: 'forgotForm',
                                value: email,
                                onChange: (e) => {
                                    setEmail(e.target.value);
                                    setIsEmailValid(
                                        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)
                                    );
                                },
                                type: 'email',
                            }]}/>
                    <Button
                        styleButton="forgotButton"
                        wordButton="Get password"
                        type="submit"
                        onClick={()=>handlePasswordRecoveryFunc(email, isEmailValid, setUserData, setIsResettingPassword)}
                    />
                </div>
            )}
        </div>
    );
}
