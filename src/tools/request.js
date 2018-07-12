import axios from 'axios';

export default function(query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3210/graphql', { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}