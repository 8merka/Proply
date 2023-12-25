import toast from 'react-hot-toast';

export async function handleLogin(login, password, navigate) {
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
