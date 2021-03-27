import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgDF( ) {

    return (
        <Carousel>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/df/ISIC_0031429.jpg' } alt="logo"/>
                <p className="title">Dermatofibroma Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/df/ISIC_0031443.jpg' } alt="logo"/>
                <p className="title">Dermatofibroma Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/df/ISIC_0031457.jpg' } alt="logo"/>
                <p className="title">Dermatofibroma Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/df/ISIC_0031799.jpg' } alt="logo"/>
                <p className="title">Dermatofibroma Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/df/ISIC_0031827.jpg' } alt="logo"/>
                <p className="title">Dermatofibroma Image 5</p>
            </div>
        </Carousel>
    )
}