import React, { useEffect, useState } from "react";
import API from "../utils/API";

export default function Wikipedia( props ) {

    const [wiki, setWiki] = useState("");

    useEffect(() =>   {
        if (props.diseaseName === "Melanocytic Nevi") {
            wikiSend("Melanocytic nevus");
        } else if (props.diseaseName === "Benign Keratosis") {
            wikiSend("Seborrheic keratosis");
        } else if (props.diseaseName === "Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowenâ€™s disease)") {
            wikiSend("Actinic keratosis");
        } else if (props.diseaseName === "Vascular skin lesion") {
            wikiSend("Nevus");
        }else if (props.diseaseName === "Basal Cell Carcinoma") {
            wikiSend("Basal-cell carcinoma");
        }else {
            wikiSend( props.diseaseName )
        }
    }, )

    const wikiSend = function( skinCondition ) {
        
        API.getWiki( skinCondition ).then(( {data} ) => {

            // const parsedWiki = JSON.parse(data);
            console.log( data );
            // setWiki( data.query.pages[0].extract )

            for (var i in data.query.pages) {
                // console.log( data.query.pages[i].extract );
                setWiki( data.query.pages[i].extract )
            }

            console.log(wiki);

        }).catch(err=>console.log(err));

    };

    // let wikiReturn = wikiSend( "melanoma" );

    // console.log( wiki );

    return (
        <div>
            {wiki} 
        </div>
    );
    
}
