import React, { useState } from "react"
import { Header } from '../../shared/components/Header/Header';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { TextBlock } from '../../shared/components/TextBlock/TextBlock';
import { Button } from '../../shared/components/Button/Button';
import { Burger } from '../../shared/components/Burger/Burger';
import { Community } from '../../shared/components/Community/Community';
import consultImg from "../../image/consultImg.png"
import c from "../../image/c.png"
import cons2 from "../../image/cons2.png"
import cons3 from "../../image/cons3.png"
import mainCons from "../../image/mainCons.png"
// import Popup from 'reactjs-popup';
import { Footer } from "../../shared/components/Footer/Footer";
import './CommunityPage.scss'

export function CommunityPage() {

    return (
        <div className="body">
            <Header ></Header>
            {/* <Burger items={[
                { text: 'Главная', link: '/reg' },
            ]}></Burger> */}
            <main className="community__main">
                {/* <div className="mainpage__main__container"> */}
                <div className="community__main__container__fisrt" style={{backgroundImage: `url(${consultImg})`}}>
                    {/* <div className="mainpage__main__container__fisrt__picture"> */}
                    {/* <img src={consultImg} alt="design" className="mainpage__main__container__fisrt__img" /> */}
                    {/* <div>dfssssssssssssssssssssssssssssssssssss</div> */}
                    {/* </div> */}
                </div>
                <div className="community__main__container__cardSecond">
                    <InformationBlock styleInfo="first_type community__main__container__cardSecond__info" image={mainCons} styleImage="styleImageMainCons" textBlocks={
                        [{
                            title: "DANUTA BAKANOVSKAYA",
                            text: "CEO and founder of “Proply”",
                            styleTitle: "title_cons",
                            styleText: "text_consFisrt"
                        },
                        {
                            text: "Danuta Bokanovskaya is an experienced and professional specialist in the field of real estate, who knows all the subtleties and nuances of the market. She founded the company “Proply” in 2020 with the aim of providing her clients with the best service and the most profitable offers. Since then, she has successfully implemented more than 500 projects for the sale, purchase and rent of residential and commercial real estate in Mogilev and other cities of Belarus. Danuta Bokanovskaya is not only the CEO, but also the soul of the company “Proply”. She is always ready to listen and take into account the wishes of her clients, to select the optimal option for each case and to accompany the deal to the end. Danuta Bokanovskaya is your reliable partner and friend in the world of real estate!",
                            styleText: "text__consSecond"
                        },
                        {
                            text: "Phone: +375 29 123 45 67; Email: danuta@proply.by",
                            styleText: "text__consThird"
                        },
                        {
                            text: "“Proply” is not just real estate, it’s your future!",
                            styleText: "text__consFourth"
                        }
                        ]}></InformationBlock>

                </div>
                <div className="community__main__cardThird">
                    <Community image={c}
                        name="Igor Stepanov"
                        text="Main  Consultant "
                        styleText="styleTextComm"
                    ></Community>
                    <Community image={cons2}
                        name="Egor Haitsin"
                        text=" Consultant "
                        styleText="styleTextComm"
                    ></Community>
                    <Community image={cons3}
                        name="Leonid Zotov"
                        text=" Consultant "
                        styleText="styleTextComm"
                    ></Community>
                    {/* <InformationBlock styleInfo="first_type" image={people} styleImage="styleImagePeople" textBlocks={
                            [{
                                title: "Who are we",
                                text: "Proply is a company that offers a new way of buying and selling properties online. Founded by Dana Bokanovskaya, a former real estate agent and entrepreneur, Proply aims to make the process of property transactions faster, easier, and more transparent. Proply uses artificial intelligence and blockchain technology to match buyers and sellers, provide instant valuations, and facilitate secure payments. Proply is revolutionizing the real estate industry with its innovative and customer-centric approach.",
                                styleTitle: "title_about",
                                styleText: "text_about"
                            }]}></InformationBlock> */}

                </div>
                {/* <div className="mainpage__main__container__cardThird">
                        <InformationBlock styleInfo="second_type" image={mainHouses} styleImage="styleImageHouses" textBlocks={
                            [{
                                title: "The best on the market",
                                text: "Proply offers you real estate products all over the world. You can choose from millions of offers from verified agencies and individuals. Proply guarantees you the quality of the product, as all objects undergo inspection and evaluation. Proply also offers you a convenient service, as you can search for real estate through the website or mobile application. Proply is your reliable partner in the real estate sector.",
                                styleTitle: "title_about",
                                styleText: "text_about"
                            }]}></InformationBlock>

                    </div>
                {/* </div> */}
            </main>
            <Footer></Footer>

        </div>
    )
}