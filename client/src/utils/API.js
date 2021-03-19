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
    return this.axios.post("/api/register", userData);
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  login(userData) {
    return this.axios.post("/api/login", userData);
  }

  authenticated() {
    return this.axios.post("/api/authenticated");
  }

  getWikipedia() {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=melanoma&exsentences=5");
  }
}

// export default new API();

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

export default {
  getWikipedia: function() {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=melanoma&exsentences=5");
  }
};
