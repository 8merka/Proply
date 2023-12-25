import toast from 'react-hot-toast';

export async function deleteHouseAndRedirect(id, navigate) {
    try {
        await sendDeleteRequest(`http://localhost:8000/api/DeleteRealeEstateObject/${id}`);
        toast.success('Дизайн был удален');
        navigate(`/houses`);
    } catch (error) {
        console.error('Ошибка:', error);
        toast.error('Ошибка при удалении дизайна');
    }
}

async function sendDeleteRequest(url) {
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}
