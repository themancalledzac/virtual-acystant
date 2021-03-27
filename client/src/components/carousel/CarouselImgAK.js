import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgAK( ) {

    return (
        <Carousel
            animation={"slide"}
        >
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/akiec/ISIC_0032437.jpg' } alt="logo"/>
                <p className="title">Actinic Keratoses Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/akiec/ISIC_0032455.jpg' } alt="logo"/>
                <p className="title">Actinic Keratoses Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/akiec/ISIC_0032854.jpg' } alt="logo"/>
                <p className="title">Actinic Keratoses Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/akiec/ISIC_0032897.jpg' } alt="logo"/>
                <p className="title">Actinic Keratoses Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/akiec/ISIC_0032947.jpg' } alt="logo"/>
                <p className="title">Actinic Keratoses Image 5</p>
            </div>
        </Carousel>
    )
}