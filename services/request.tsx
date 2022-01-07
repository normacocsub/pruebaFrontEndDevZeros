import axios from 'axios';

axios.defaults.baseURL = ''


async function getRequestHeaders() {
    try {
      return {
        Authorization: 'Bearer ' + ''
      };
    } catch (error) {
      return {};
    }
}

export async function apiRestGet(path: string, body = {}): Promise<any> {
    try {
      const requestOptions: any = {};
      requestOptions.headers = await getRequestHeaders();
      requestOptions.params = body;
      const response = await axios.get(path, requestOptions);
      return response.data;
    } catch (error) {
      return error.response?.data;
    }
}

export async function apiRestPost(path: string, body: any = {}): Promise<any> {
    try {
      const requestOptions: any = {};
      requestOptions.headers = await getRequestHeaders();
      const response = await axios.post(path, body, requestOptions);
      return response.data;
    } catch (error) {
      return { error: error };
    }
}

export async function apiRestPatch(path: string, body: any): Promise<any> {
    try {
      const requestOptions: any = {};
      requestOptions.headers = await getRequestHeaders();
      const response = await axios.patch(path, body, requestOptions);
      return response.data;
    } catch (error) {
      return { error: error };
    }
}

export async function apiRestDelete(path: string, body: any): Promise<any> {
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

