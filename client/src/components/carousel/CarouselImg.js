import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';
import "./CarouselImg.css";
// import { Paper, Button } from '@material-ui/core';

// import * from "../assets/skin_images/melanoma/"

export default function CarouselImg( props ) {

    const [disease, setDisease] = useState([""]);

    useEffect(() =>   {
        if (props.diseaseNameSearch === "Melanocytic Nevi") {
            setDisease( {
                disease: [ 
                        {
                            item: "/assets/images/melanoma/ISIC_0034145.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034159.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034313.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034316.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034317.jpg",
                        }
                    ]
                }
            );
        } else if (props.diseaseNameSearch === "Benign Keratosis") {
            setDisease("bk");
        } else if (props.diseaseNameSearch === "Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowenâ€™s disease)") {
            setDisease("ak");
        } else if (props.diseaseNameSearch === "Vascular skin lesion") {
            setDisease("vsl");
        }else if (props.diseaseNameSearch === "Basal Cell Carcinoma") {
            setDisease("bcc");
        }else if (props.diseaseNameSearch === "Melanoma") {
            setDisease( {
                disease: [ 
                        {
                            item: "/assets/images/melanoma/ISIC_0034145.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034159.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034313.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034316.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034317.jpg",
                        }
                    ]
                }
            );
        }else if (props.diseaseNameSearch === "Dermatofibroma") {
            setDisease( {
                disease: [ 
                        {
                            item: "/assets/images/melanoma/ISIC_0034145.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034159.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034313.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034316.jpg",
                        },
                        {
                            item: "/assets/images/melanoma/ISIC_0034317.jpg",
                        }
                    ]
                }
            );
        }
    }, )

    console.log(disease.item[0])

    return (
        <Carousel>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + disease.item[0] } alt="logo"/>
                <p className="title">Reference Image 1</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + disease.item[1]} alt="logo"/>
                <p className="title">Reference Image 2</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + disease.item[2]} alt="logo"/>
                <p className="title">Reference Image 3</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + disease.item[3]} alt="logo"/>
                <p className="title">Reference Image 4</p>
            </div>
            <div>
                <img className="img" src={process.env.PUBLIC_URL + disease.item[4]} alt="logo"/>
                <p className="title">Reference Image 5</p>
            </div>
            {/* <div>
                <img className="img" src={process.env.PUBLIC_URL + '/assets/images/melanoma/ISIC_0034317.jpg'} alt="logo"/>
                <p className="title">Melanoma Image 5</p>
            </div> */}
        </Carousel>
    )

    // function Item( props )
    // {
    //     return (
    //         <Paper>
    //             <img src = {props.item.src} ></img>

    //             <Button className="CheckButton">
    //                 Check it out!
    //             </Button>
    //         </Paper>
    //     )
    // }
    

}