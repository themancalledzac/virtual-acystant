import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgMn( ) {

    return (
        <Carousel
            animation={"slide"}
        >
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034145.jpg' } alt="logo"/>
                <p className="title">Melanoma Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034159.jpg' } alt="logo"/>
                <p className="title">Melanoma Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034313.jpg' } alt="logo"/>
                <p className="title">Melanoma Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034316.jpg' } alt="logo"/>
                <p className="title">Melanoma Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034317.jpg' } alt="logo"/>
                <p className="title">Melanoma Image 5</p>
            </div>
        </Carousel>
    )
}