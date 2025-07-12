import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    console.log('request sent');
    return request;
  },
  (e) => {
    return Promise.reject(e);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (e) => {
    console.log(e.response);
    if (e.response.state === 404) {
      console.log('NOT FOUND');
    }
    return Promise.reject(e);
  }
);

export default authFetch;
