import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { EstateCard } from '../../shared/components/EstateCard/EstateCard';
import cons2 from "../../image/cons2.png"
import toast from 'react-hot-toast';
import axios from 'axios'

// import './ProfilePage.scss'

export function TryPage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    let seller_id = localStorage.getItem('id');

    useEffect(() => {

        async function GetRealeEstateObjectBySellerID() {
            try {
                let response = await fetch(`http://localhost:8000/api/GetRealeEstateObjectBySellerID/${seller_id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    let objects = await response.json();
                    let container = document.querySelector('.estates_container');

                    container.innerHTML = '';

                    let objectCards = objects.map(async (object) => {
                        let typeResponse = await fetch(`http://localhost:8000/api/GetType/${object.type_id}`);
                        let nameEstate = await typeResponse.json();

                        return (
                            <EstateCard
                                estatePrice={object.price}
                                estateName={nameEstate.type}
                                parkingCount={object.car_space}
                                bathroomCount={object.bathrooms_number}
                                estateAdress={object.addres}
                            />
                        );
                    });

                    Promise.all(objectCards).then((completedCards) => {
                        ReactDOM.render(completedCards, container);
                    });
                }
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
                toast.error(`Ошибка: ${error.message}`);
            }
        };

        GetRealeEstateObjectBySellerID();
        fetchUserData();

    }, []);

    // Функция для загрузки изображения профиля на сервер
    async function uploadProfileImageToServer(imageFile) {
        try {
          const formData = new FormData();
          formData.append('imageBlob', imageFile);
      
          const response = await fetch('http://localhost:8000/api/PostObjectPhoto2', {
            method: 'POST',
            body: formData,
          });
      
          const data = await response.json();
      
          if (response.ok) {
            toast.success('Изображение профиля успешно загружено на сервер');
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('Ошибка при загрузке изображения профиля на сервер:', error);
          toast.error('Произошла ошибка при загрузке изображения профиля');
        }
      }

    // Обработчик изменения файла изображения профиля
    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Вызываем функцию для загрузки изображения на сервер
            uploadProfileImageToServer(file);

            // Устанавливаем изображение в состояние для отображения на странице
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="profilePage__body">
            <Header></Header>
            <main className="profilePage__body__main">
                <div className="profilePage__body__main__container">
                    <div className="profilePage__body__main__container__photo">
                        <label htmlFor="profileImageInput">
                            {profileImage ? <img src={profileImage} alt="profile" /> : <span>Загрузить фото</span>}
                        </label>
                        <input
                            type="file"
                            id="profileImageInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleProfileImageChange}
                        />

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