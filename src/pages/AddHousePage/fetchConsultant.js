export const fetchConsultant = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/GetAllConsultant');
        const data = await response.json();
        const consultants = data;
        if (consultants && consultants.length > 0) {
            const randomConsultant = consultants[Math.floor(Math.random() * consultants.length)];
            return randomConsultant.id;
        } else {
            console.error('No consultants available');
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}
