import React from "react";
import API from "../utils/API";

export default function Wikipedia() {

    const result = API.getWikipedia();

    console.log(JSON.stringify(result));

    return (
        <form className="search">
            <div >
                <p> Result is {JSON.stringify(result)} </p>
            </div>
        </form>
    );
    
}
