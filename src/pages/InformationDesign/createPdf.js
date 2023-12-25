import toast from 'react-hot-toast';

export async function createPdf(typeData, houseInfo) {
    const data = [
        `Type: ${typeData.type}`,
        `Price: ${houseInfo.price}`,
        `Car: ${houseInfo.car_space}`,
        `Bedrooms: ${houseInfo.bedrooms_number}`,
        `Bathrooms: ${houseInfo.bathrooms_number}`,
        `Addres: ${houseInfo.addres}`
    ]; 

    try {
        await sendPostRequest('http://localhost:8000/create-pdf', { data });
        toast.success('PDF успешно создан');
    } catch (error) {
        console.error('Ошибка:', error);
        toast.error('Ошибка при создании PDF');
    }
}

async function sendPostRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}
