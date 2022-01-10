import axios from 'axios';

axios.defaults.baseURL = ''

const getRequestHeaders = async () => {
    try {
      let token = localStorage.getItem('token');
      return {
        Authorization: 'Bearer ' + token
      };
    } catch (error) {
      return {};
    }
}

export const  apiRestGet = async (path, body = {}) => {
    try {
      const requestOptions = {};
      requestOptions.headers = await getRequestHeaders();
      requestOptions.params = body;
      const response = await axios.get(path, requestOptions);
      return response.data;
    } catch (error) {
      return error.response?.data;
    }
}

export const apiRestPost = async(path, body = {}) =>  {
    try {
      const requestOptions = {};
      requestOptions.headers = await getRequestHeaders();
      const response = await axios.post(path, body, requestOptions);
      return response.data;
    } catch (error) {
      return { error: error };
    }
}

export async function apiRestPut(path, body) {
    try {
      const requestOptions = {};
      requestOptions.headers = await getRequestHeaders();
      const response = await axios.put(path, body, requestOptions);
      return response.data;
    } catch (error) {
      return { error: error };
    }
}

export async function apiRestDelete(path, body) {
    try {
      const requestHeaders = await getRequestHeaders();
  
      const response = await axios.delete(path, {
        headers: requestHeaders,
        data: body,
      });
      return response.data;
    } catch (error) {
      return { error: error };
    }
  }

