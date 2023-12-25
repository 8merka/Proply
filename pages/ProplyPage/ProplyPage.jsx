import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Input } from "../../shared/components/Input/Input";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { Statistick } from '../../shared/components/Statistick/Statistick';
import house from '../../image/house.png';
import house2 from '../../image/house2.png';
import vilage from '../../image/vilage.png';
// import toast from 'react-hot-toast';

import './ProplyPage.scss'

export function ProplyPage() {
    // const navigate = useNavigate();
    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");

    // const handleLogin = (e) => {
    //     e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    //     if (login.trim() === "" || password.trim() === "") {
    //         // Поля пусты, выводим тостер
    //         toast.error('Поля не должны быть пустыми');
    //     } else {
    //         // Поля не пусты, выводим значения переменных в консоль
    //         console.log('Login:', login);
    //         console.log('Password:', password);

    //         // Здесь можно добавить код для перехода на страницу 'profile'
    //         navigate('/profile');
    //     }
    // };

    return (
        <div className="proplyPage__body">
            <Header></Header>
            <main className="proplyPage__body__main">
                <div className="proplyPage__body__main__container">
                    <div className="proplyPage__body__main__container__textContainer">
                        <div className="proplyPage__body__main__container__textContainer__proply">Proply - Your Real Estate Oasis</div>
                        <div className="proplyPage__body__main__container__textContainer__step">Step into your own real estate oasis, where discovering the
                            perfect home is made easy and comfortable with advanced
                            filtering, reliable data and a personalized approach.</div>
                        <Button wordButton="Let's find your Team Oasis." styleButton="styleButtonAboutUs"></Button>
                    </div>
                    <div className="proplyPage__body__main__container__img">
                        <img className="proplyPage__body__main__container__img__picture" src={house} alt="house"></img>
                    </div>
                </div>
                <div className="proplyPage__body__main__statistick">
                <Statistick titles={['30+', '72K+', '200+', '130+']} 
                texts={['Countries including England and Switzerland.', 
                'Happy customers, which we are very proud of.',
                 'New listings daily to keep our inventory exciting.', 
                 'Skilled and committed staff members.'
            ]}></Statistick>

                </div>
                <div className="proplyPage__body__main__secondBlock">
                    <InformationBlock styleInfo="first_type proplyPage__body__main__secondBlock__infoBlock" image={house2} styleImage="styleImageHouse2" textBlocks={[
                        {
                            title: "Real",
                            text: "Our site offers a unique approach to real estate sales. We understand that each property is special, so we provide individual attention to each client. Our specialists will help you determine the optimal price and prepare your property for sale.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        },
                        {
                            title: "Individual",
                            text: "Our site offers a unique approach to real estate sales. We understand that each property is special, so we provide individual attention to each client. Our specialists will help you determine the optimal price and prepare your property for sale.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        },
                        {
                            title: "Comprehensive",
                            text: "Unlike other sites, we offer a comprehensive solution for selling your property. Our team of experts will assist you at every stage of the sales process, from valuation to legal support of the transaction.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        },
                    ]}></InformationBlock>
                </div>
                <div className="proplyPage__body__main__thirdBlock">
                    <InformationBlock styleInfo="second_type proplyPage__body__main__thirdBlock__infoBlock" image={vilage} styleImage="styleImageVilage" textBlocks={[
                        {
                            title: "Other possibilities",
                            text:"1. Advanced Search: Our advanced search feature allows you to filter properties according to your specific needs, such as location, price range, property type, and much more.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        },
                        {
                            // title: "Individual",
                            text: "2. Market Analytics: We provide up-to-date market analytics that will help you make informed decisions. This includes information about market trends, property values, and much more.",
                            // styleTitle: "title_main",
                            styleText: "text_main"
                        },
                        {
                            text: "3. Expert Advice: Our team of real estate experts is always ready to provide you with advice and answer any of your questions.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        },
                        {
                            text: "4. Customer Support: Our customer support service is available 24/7 to help you with any problems or questions.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        }
                    ]}></InformationBlock>
                </div>
            </main>


            <Footer></Footer>
        </div>
    );
}