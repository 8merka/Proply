// resetPassword.js
import toast from 'react-hot-toast';

export const resetPassword = async (userData, password, setIsResettingPassword, onClose) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...userData,
            password,
        }),
    };

    try {
        const response = await fetch(`http://localhost:8000/api/PutUser/${userData.id}`, requestOptions);

        if (response.ok) {
            const updatedUser = await response.json();
            console.log(updatedUser);
            toast.success('Пароль изменен');
            setIsResettingPassword(false);
            onClose();
        } else {
            const errorData = await response.json();
            toast.error(errorData.error);
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
};
