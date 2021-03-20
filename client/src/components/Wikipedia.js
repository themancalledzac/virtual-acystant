import React from "react";
import API from "../utils/API";

export default function Wikipedia() {

    const wiki = function( pClassName ) {
        API.getWiki( pClassName );
    };

    let wikiReturn = wiki("melanoma");

    return (
        <form className="search">
            <div >
                <p> Result is {wikiReturn} </p>
            </div>
        </form>
    );
    
}
