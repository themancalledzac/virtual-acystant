import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgMNVI( ) {

    return (
        <Carousel>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/nv/ISIC_0033265.jpg' } alt="logo"/>
                <p className="title">Melanomacytic Nevus Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/nv/ISIC_0033266.jpg' } alt="logo"/>
                <p className="title">Melanomacytic Nevus Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/nv/ISIC_0033273.jpg' } alt="logo"/>
                <p className="title">Melanomacytic Nevus Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/nv/ISIC_0033276.jpg' } alt="logo"/>
                <p className="title">Melanomacytic Nevus Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/nv/ISIC_0033277.jpg' } alt="logo"/>
                <p className="title">Melanomacytic Nevus Image 5</p>
            </div>
        </Carousel>
    )
}