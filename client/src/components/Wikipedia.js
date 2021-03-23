import React, { useEffect, useState } from "react";
import API from "../utils/API";

export default function Wikipedia( props ) {

    // set state of the wiki element for rendering
    const [wiki, setWiki] = useState("");

    // Useeffect to call wikisend to trigger API call to wikipedia
    // Some classNames do not have corresponding wiki articles and require different search terms
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

    // Send wiki triggers API call using the utils.API class
    const wikiSend = function( skinCondition ) {
        
        API.getWiki( skinCondition ).then(( {data} ) => {

            // results come back with multiple pages
            // must be iterated over to build our wiki state
            for (var i in data.query.pages) {

                setWiki( data.query.pages[i].extract )
            }

        }).catch(err=>console.log(err));

    };

    // return wiki state for rendering in the findings card
    return (
        <div>
            {wiki} 
        </div>
    );
    
}
