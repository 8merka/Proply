// handlePasswordRecovery.js
import toast from 'react-hot-toast';

export async function handlePasswordRecovery(email, isEmailValid, setUserData, setIsResettingPassword) {
    if (email.trim() === "") {
        toast.error('Поле не должны быть пустыми');
        return;
    }
    if (!isEmailValid) {
        toast.error('Неверный формат почты');
        return;
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    };

    try {
        const response = await fetch('http://localhost:8000/api/GetUserByEmail', requestOptions);

        if (response.ok) {
            const userData = await response.json();
            setUserData(userData);
            setIsResettingPassword(true);
        } else {
            const errorData = await response.json();
            toast.error(errorData.error);
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
};

// export default handlePasswordRecovery;
