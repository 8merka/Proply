import React, { useState, useEffect } from "react"
import { Header } from '../../shared/components/Header/Header';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { TextBlock } from '../../shared/components/TextBlock/TextBlock';
import { Button } from '../../shared/components/Button/Button';
import mainPage from "../../image/mainPage.png"
import people from "../../image/people.png"
import mainHouses from "../../image/mainHouses.png"
// import Popup from 'reactjs-popup';
import { Footer } from "../../shared/components/Footer/Footer";
import toast from 'react-hot-toast';
import './MainPage.scss'
// const fs = require('fs');

export function MainPage() {
    
    useEffect(() => {

        // async function uploadAndDeleteImages(folderPath) {
        //     try {
        //         const files = fs.readdirSync(folderPath);
        //         const imageFiles = files.filter(file => file.endsWith('.png') || file.endsWith('.jpg'));
        
        //         for (const imageFile of imageFiles) {
        //             const imagePath = `${folderPath}/${imageFile}`;
        //             const imageBlob = fs.readFileSync(imagePath);
        //             const response = await fetch('http://your-api-url/UploadUserImage', {
        //                 method: 'POST',
        //                 body: JSON.stringify({ image: imageBlob }),
        //                 headers: { 'Content-Type': 'application/json' },
        //             });
        
        //             if (!response.ok) {
        //                 throw new Error(`Failed to upload image: ${imageFile}`);
        //             }
        
        //             fs.unlinkSync(imagePath);
        //         }
        
        //         console.log('All images uploaded and deleted successfully.');
        //     } catch (err) {
        //         toast.error(err)
        //         console.error(err);
        //     }
        // }
        
        // uploadAndDeleteImages("../../tm");
    });
    return (
        <div className="body">
            <Header ></Header>
            <main className="mainpage__main">
                {/* <div className="mainpage__main__container"> */}
                    <div className="mainpage__main__container__fisrt">
                        <div className="mainpage__main__container__fisrt__picture"><img src={mainPage} alt="design" className="mainpage__main__container__fisrt__img" /></div>
                    </div>
                    <div className="mainpage__main__container__cardSecond">
                        <InformationBlock styleInfo="first_type" image={people} styleImage="styleImagePeople" textBlocks={
                            [{
                                title: "Who are we",
                                text: "Proply is a company that offers a new way of buying and selling properties online. Founded by Dana Bokanovskaya, a former real estate agent and entrepreneur, Proply aims to make the process of property transactions faster, easier, and more transparent. Proply uses artificial intelligence and blockchain technology to match buyers and sellers, provide instant valuations, and facilitate secure payments. Proply is revolutionizing the real estate industry with its innovative and customer-centric approach.",
                                styleTitle: "title_about",
                                styleText: "text_about"
                            }]}></InformationBlock>

                    </div>
                    <div className="mainpage__main__container__cardThird">
                        <InformationBlock styleInfo="second_type" image={mainHouses} styleImage="styleImageHouses" textBlocks={
                            [{
                                title: "The best on the market",
                                text: "Proply offers you real estate products all over the world. You can choose from millions of offers from verified agencies and individuals. Proply guarantees you the quality of the product, as all objects undergo inspection and evaluation. Proply also offers you a convenient service, as you can search for real estate through the website or mobile application. Proply is your reliable partner in the real estate sector.",
                                styleTitle: "title_about",
                                styleText: "text_about"
                            }]}></InformationBlock>

                    </div>
                    <div className="mainpage__main__container__cardFourth">
                        <TextBlock styleTextBlock="textBlockMain"
                            styleTitle="styleTitleJoin"
                            title="Join us"
                            text="Do you want to join a team of passionate and talented people who are changing the way people buy and sell properties online? If you answered yes, then Proply is the place for you. Apply now and become part of the Proply family."
                            styleText="styleTextJoin">
                        </TextBlock>
                        <Button wordButton="Let's find your Team Oasis." styleButton="styleButtonAboutUs"></Button>
                    </div>
                {/* </div> */}
            </main>
            <Footer></Footer>

        </div>
    )
}