import React from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImgBCC( ) {

    return (
        <Carousel>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bcc/ISIC_0032857.jpg' } alt="logo"/>
                <p className="title">Basal Cell Carcinoma Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bcc/ISIC_0032894.jpg' } alt="logo"/>
                <p className="title">Basal Cell Carcinoma Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bcc/ISIC_0032906.jpg' } alt="logo"/>
                <p className="title">Basal Cell Carcinoma Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bcc/ISIC_0032959.jpg' } alt="logo"/>
                <p className="title">Basal Cell Carcinoma Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/bcc/ISIC_0032991.jpg' } alt="logo"/>
                <p className="title">Basal Cell Carcinoma Image 5</p>
            </div>
        </Carousel>
    )
}