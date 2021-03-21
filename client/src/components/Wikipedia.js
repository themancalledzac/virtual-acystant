import React, { useEffect, useState } from "react";
import API from "../utils/API";

export default function Wikipedia( props ) {

    const [wiki, setWiki] = useState("");

    useEffect(() =>   {
        wikiSend( props.diseaseName )
    }, [] )

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
