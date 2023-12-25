import toast from 'react-hot-toast';

export async function fetchHouseInfo(id, setHouseInfo, setTypeData, setSellerData, setConsultantData, setUserData) {
    try {
        const houseData = await fetchData(`http://localhost:8000/api/GetRealeEstateObject/${id}`);
        setHouseInfo(houseData);

        if (houseData.type_id) {
            const typeData = await fetchData(`http://localhost:8000/api/GetType/${houseData.type_id}`);
            setTypeData(typeData);
        }

        if (houseData.consultant_id) {
            const consultantData = await fetchData(`http://localhost:8000/api/GetConsultant/${houseData.consultant_id}`);
            setConsultantData(consultantData);
        }

        if (houseData.seller_id) {
            const sellerData = await fetchData(`http://localhost:8000/api/GetUser/${houseData.seller_id}`);
            setSellerData(sellerData);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        toast.error('Ошибка при получении данных о доме');
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
