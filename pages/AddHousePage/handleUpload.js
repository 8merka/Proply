import toast from 'react-hot-toast';
import {fetchConsultant} from './fetchConsultant';

export const handleUpload = async (state, navigate) => {
    const { name, price, type_id, description, addres, bathrooms_number, car_space, bedrooms_number } = state;

    try {
        if (name.trim() === "" || price.trim() === "" ||type_id.trim() === "" || description.trim()===""||addres.trim()==="" ||bathrooms_number.trim()===""||car_space.trim()===""||bedrooms_number.trim()===""){
            toast.error('Поля не должны быть пустыми');
        }

        const response = await fetch('http://localhost:8000/api/PostRealeEstateObject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                seller_id: localStorage.getItem('id'),
                type_id,
                addres,
                price,
                bathrooms_number,
                car_space,
                bedrooms_number,
                description,
                state: 3,
                consultant_id: await fetchConsultant(),
                photo_id: 1,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            toast.success("данные успешно добавились",data.message);
            navigate('/houses')
        } else {
            const errorData = await response.json();
            toast.error("ffffff",errorData.error);
        }
    
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
};
