// const db = require("../models");
const axios = require ("axios");

module.exports = {
    // this will be used to find all previous images with their associated probabilities
    
    getWiki: function( skinCondition ) {

        return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=" + skinCondition + "&exsentences=5");
        
    },  

}; 