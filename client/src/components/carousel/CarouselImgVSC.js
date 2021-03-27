import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgVSC( ) {

    return (
        <Carousel>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/vasc/ISIC_0032932.jpg' } alt="logo"/>
                <p className="title">Vascular Skin Lesion Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/vasc/ISIC_0033031.jpg' } alt="logo"/>
                <p className="title">Vascular Skin Lesion Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/vasc/ISIC_0033092.jpg' } alt="logo"/>
                <p className="title">Vascular Skin Lesion Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/vasc/ISIC_0033123.jpg' } alt="logo"/>
                <p className="title">Vascular Skin Lesion Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/vasc/ISIC_0033135.jpg' } alt="logo"/>
                <p className="title">Vascular Skin Lesion Image 5</p>
            </div>
        </Carousel>
    )
}