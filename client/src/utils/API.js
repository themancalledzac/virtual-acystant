import axios from "axios";

// export default {
//   uploadData: function (top3, result) {
//     return axios.post("/api/data", top3, result);
//   },
// };

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

// export default {
//   // Gets all posts
//   getPosts: function () {
//     return axios.get("/api/posts");
//   },
//   // Gets the post with the given id
//   getPost: function (id) {
//     return axios.get("/api/posts/" + id);
//   },
//   // Deletes the post with the given id
//   deletePost: function (id) {
//     return axios.delete("/api/posts/" + id);
//   },
//   // Saves a post to the database
//   savePost: function (postData) {
//     return axios.post("/api/posts", postData);
//   },
// };


