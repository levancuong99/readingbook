import axios from 'axios'

let API_URL='https://spring-fw.herokuapp.com/api'

const handleOkResponse = (response, resolve) => {
    resolve(response);
  };
const handleErrorResponse = (error, reject) => {
    reject(error);
  };
const service = {
    get(endPoint) {
      return new Promise((resolve, reject) => {
        axios.get(`${API_URL}${endPoint}`,{ headers: localStorage.getItem('token') ? { Authorization: `bearer ${localStorage.getItem('token')}` } : null})
          .then((response) => {
            handleOkResponse(response, resolve);
          })
          .catch((error) => {
            handleErrorResponse(error, reject);
          });
      });
    },
    post(endPoint, params) {
      return new Promise((resolve, reject) => {
        axios.post(`${API_URL}${endPoint}`, params, { headers: localStorage.getItem('token') ? { Authorization: `bearer ${localStorage.getItem('token')}` } : null})
          .then((response) => {
            handleOkResponse(response, resolve);
          })
          .catch((error) => {
            handleErrorResponse(error, reject);
          });
      });
    },
    put(endPoint, params) {
      return new Promise((resolve, reject) => {
        axios.put(`${API_URL}${endPoint}`, params, { headers: localStorage.getItem('token') ? { Authorization: `bearer ${localStorage.getItem('token')}` } : null})
          .then((response) => {
            handleOkResponse(response, resolve);
          })
          .catch((error) => {
            handleErrorResponse(error, reject);
          });
      });
    },
    delete(endPoint) {
      return new Promise((resolve, reject) => {
        axios.delete(`${API_URL}${endPoint}`, { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } })
          .then((response) => {
            handleOkResponse(response, resolve);
          })
          .catch((error) => {
            handleErrorResponse(error, reject);
          });
      });
    },
  };
  export default service;