import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { EstateCard } from '../../shared/components/EstateCard/EstateCard';
import cons2 from "../../image/cons2.png"
import toast from 'react-hot-toast';

import './ProfilePage.scss'

export function ProfilePage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [profileImage, setProfileImage] = useState(""); // Состояние для хранения изображения профиля
    // const [estateObjects, setEstateObjects] = useState([]); // Состояние для хранения объектов недвижимости


    let seller_id = localStorage.getItem('id');

    async function uploadProfileImage() {
        try {
            // Здесь вы должны отправить запрос на сервер для получения изображения профиля
            let response = await fetch(`http://localhost:8000/api/GetProfileImage/${seller_id}`);

            if (response.ok) {
                // Если запрос успешен, получаем изображение и устанавливаем его в состояние
                let imageBlob = await response.blob();
                setProfileImage(URL.createObjectURL(imageBlob));
            }
        } catch (error) {
            console.error('Ошибка при загрузке изображения профиля:', error);
        }
    }


    useEffect(() => {

        async function GetRealeEstateObjectBySellerID() {

            try {
                // Выполняем GET-запрос к API
                let response = await fetch(`http://localhost:8000/api/GetRealeEstateObjectBySellerID/${seller_id}`);

                // Проверяем, успешно ли выполнен запрос
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    // toast.error(response)
                    // Преобразуем ответ в JSON
                    let objects = await response.json();

                    // localStorage.setItem('estateObjects', JSON.stringify(objects));
                    // Получаем контейнер для дизайнов
                    let container = document.querySelector('.estates_container');



                    // Очищаем контейнер
                    container.innerHTML = '';

                    let objectCards = objects.map(async (object) => {
                        // Получаем данные дизайнера
                        let typeResponse = await fetch(`http://localhost:8000/api/GetType/${object.type_id}`);
                        let nameEstate = await typeResponse.json();

                        // Получаем фотографии дизайна
                        // let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
                        // let photoData = await photoResponse.json();

                        // Создаем новый элемент DesignCard и добавляем его в массив
                        return (
                            <EstateCard
                                estatePrice={object.price}
                                estateName={nameEstate.type}
                                parkingCount={object.car_space}
                                bathroomCount={object.bathrooms_number}
                                // DesignImage={photoData.photos[0]}
                                estateAdress={object.addres}
                            />
                        );
                    });

                    // Дожидаемся выполнения всех промисов и рендерим все элементы DesignCard
                    Promise.all(objectCards).then((completedCards) => {
                        ReactDOM.render(completedCards, container);
                    });
                }
                uploadProfileImage();
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }



        const fetchUserData = async () => {
            const id = localStorage.getItem('id');
            const url = 'http://localhost:8000/api/GetUser/' + id;
            try {
                const response = await fetch(url);
                const data = await response.json();

                
                if (response.ok) {
                    setName(data.name);
                    setCity(data.city);
                    setPhone(data.phone);
                    setEmail(data.email);
                    setRole(data.role);
                    toast.success('Успешное подключение к аккаунту');
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                toast.error("Ошибкаaaaaaaaaaaaaaaaa: ${error.message}");
            }
        };

        GetRealeEstateObjectBySellerID()
        fetchUserData();

    }, []);

    return (
        <div className="profilePage__body">
            <Header></Header>
            <main className="profilePage__body__main">
                <div className="profilePage__body__main__container">
                    <div className="profilePage__body__main__container__photo">
                        {/* <img alt="profile"></img> */}
                        <img src={profileImage} alt="profile" />
                        
                        </div>
                    <div className="profilePage__body__main__container__date">
                        <p>City: {city}</p>
                        <p>Name: {name}</p>
                        <p>Phone: {phone}</p>
                        <p>Role: {role}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </main>
                <div className="estates_container"></div>
            <Footer></Footer>
        </div>
    );
}


// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom";
// import { Header } from '../../shared/components/Header/Header';
// import { Footer } from "../../shared/components/Footer/Footer";
// // import { Input } from "../../shared/components/Input/Input";
// // import { Form } from "../../shared/components/Form/Form";
// // import { Button } from '../../shared/components/Button/Button';
// // import toast from 'react-hot-toast';

// import './ProfilePage.scss'

// export function ProfilePage() {
//     const navigate = useNavigate();
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const userId = localStorage.getItem("id");

//         if (userId) {
//             fetch('http://localhost:8000/api/GetUser/{id}')
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data.length > 0) {
//                         setUserData(data[0]);
//                     } else {
//                         // navigate("/login"); // Перенаправление на страницу входа
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Ошибка при получении данных пользователя:", error);
//                     navigate("/login");
//                 });
//         } else {
//             navigate("/login");
//         }
//     }, [navigate]);



//     return (
//         <div className="logInPage__body">
//             <Header></Header>
//             <main className="logInPage__body__main">
//                 <div className="logInPage__body__main__container">
//                     <div className="logInPage__body__main__container__photo"></div>
//                     {userData && (
//                     <div className="logInPage__body__main__container__date">
//                         <p>City: {userData.city}</p>
//                         <p>Name: {userData.name}</p>
//                         <p>Phone: {userData.phone}</p>
//                         <p>Role: {userData.role}</p>
//                         <p>Email: {userData.email}</p>
//                     </div>
//                 )}
//                 </div>
//             </main>
//             <Footer></Footer>
//         </div>
//     );
// }
