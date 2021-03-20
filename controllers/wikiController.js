// const db = require("../models");

module.exports = {
    // this will be used to find all previous images with their associated probabilities
    getWiki: function() {
        const wikiReturn = axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=melanoma&exsentences=5");
        console.log(wikiReturn);
        return wikiReturn;
    },  

}; 