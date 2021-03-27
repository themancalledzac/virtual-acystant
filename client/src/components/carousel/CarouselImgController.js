import React, { useEffect, useState } from "react";
import CarouselImgMNVI from "../carousel/CarouselImgMNVI";
import CarouselImgMn from "../carousel/CarouselImgMn";
import CarouselImgAK from "../carousel/CarouselImgAK";
import CarouselImgBCC from "../carousel/CarouselImgBCC";
import CarouselImgBK from "../carousel/CarouselImgBK";
import CarouselImgDF from "../carousel/CarouselImgDF";
import CarouselImgVSC from "../carousel/CarouselImgVSC";
import Carousel from "react-material-ui-carousel";

export default function CarouselImgController( props ) {

    const [CarouselType, setCarousel] = useState();
    
    let diseaseName = props.diseaseImg;

    useEffect(( ) =>   {
        if (diseaseName === "Melanocytic Nevi") {
            setCarousel( CarouselImgMNVI );
        } else if (diseaseName === "Melanoma") {
            setCarousel( CarouselImgMn);
        } else if (diseaseName === "Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowenâ€™s disease)") {
            setCarousel( CarouselImgAK );
        } else if (diseaseName === "Basal Cell Carcinoma") {
            setCarousel( CarouselImgBCC );
        } else if (diseaseName === "Benign Keratosis") {
            setCarousel( CarouselImgBK );
        } else if (diseaseName === "Dermatofibroma") {
            setCarousel( CarouselImgDF );
        } else if (diseaseName === "Vascular skin lesion") {
            setCarousel( CarouselImgVSC );
        }
    }, [diseaseName, props.diseaseImg] )

    console.log( CarouselType );

    return (
        <div>
            { CarouselType } 
        </div>
    );

}