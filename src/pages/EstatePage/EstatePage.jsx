import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { EstateCard } from '../../shared/components/EstateCard/EstateCard';
import toast from 'react-hot-toast';

import './EstatePage.scss'

export function EstatePage() {
    // const [estateObjects, setEstateObjects] = useState([]); // Состояние для хранения объектов недвижимости


    // let seller_id = localStorage.getItem('id');

    useEffect(() => {

        async function GetRealeEstateObjectBySellerID() {

            try {
                // Выполняем GET-запрос к API
                let response = await fetch(`http://localhost:8000/api/GetAllRealeEstateObject`);

                // Проверяем, успешно ли выполнен запрос
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    console.log(response)
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
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }

        GetRealeEstateObjectBySellerID()

    }, []);

    return (
        <div className="estatePage__body">
            <Header></Header>
            <main className="estatePage__body__main">
                <div className="estates_container"></div>
            </main>
            <Footer></Footer>
        </div>
    );
}