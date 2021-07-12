import axios from 'axios';

export default {
  // Retrieve random users
  search: function () {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  },
};
