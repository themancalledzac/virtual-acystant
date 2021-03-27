import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgBK( ) {

    return (
        <Carousel
            animation={"slide"}
        >
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bkl/ISIC_0031436.jpg' } alt="logo"/>
                <p className="title">Benign Keratosis Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bkl/ISIC_0031449.jpg' } alt="logo"/>
                <p className="title">Benign Keratosis Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bkl/ISIC_0031459.jpg' } alt="logo"/>
                <p className="title">Benign Keratosis Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bkl/ISIC_0031464.jpg' } alt="logo"/>
                <p className="title">Benign Keratosis Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bkl/ISIC_0031465.jpg' } alt="logo"/>
                <p className="title">Benign Keratosis Image 5</p>
            </div>
        </Carousel>
    )
}