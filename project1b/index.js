const axios = require('axios');

module.exports = {
  /**
   * Take Github username select profile all data.
   * @example
   * username = mugan86
   * @param {string} username 
   */
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};