import axios from "axios";

class API {
  axios;

  constructor() {
    this.axios = axios.create();
  }

  /**
   * @param {String} name
   * @param {String} value
   */
  setHeader(name, value) {
    if (value) this.axios.defaults.headers.common[name] = value;
    else delete this.axios.defaults.headers.common[name];
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  register(userData) {
    return this.axios.post("/api/auth/register", userData);
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  login(userData) {
    return this.axios.post("/api/auth/login", userData);
  }

  authenticated() {
    return this.axios.post("/api/auth/authenticated");
  }

  // API call to wikipedia with skinCondition passed through based on props
  getWiki1( skinCondition ) {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=" + skinCondition + "&exsentences=1&explaintext=1");
  }

  // API call to wikipedia with skinCondition passed through based on props
  getWiki2( skinDescription ) {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=" + skinDescription + "&exsentences=25&explaintext=1");
  }
  
  savePredictions(predictions) {
    return this.axios.post("/api/predictions", predictions);
  }

  loadPredictions() {
    return this.axios.get("/api/predictions");
  }

}

export default new API();