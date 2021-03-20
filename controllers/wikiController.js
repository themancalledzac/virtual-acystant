// const db = require("../models");
const axios = require ("axios");

module.exports = {
    // this will be used to find all previous images with their associated probabilities
    
    getWiki: function( req ) {
        let pClassName = req.params.className;
        async function wiki( pClassName ) {
             
            const response = await axios ({
                url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=" + pClassName + "&exsentences=5",
                method: "GET"
            });
        
        console.log( JSON.stringify(response.data) );
        return(response.data.query.extract);
        }
        return wiki( pClassName );
    },  

}; 