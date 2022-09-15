import axios from "axios";
import { BASE_API_URL } from "../constants";

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

export const processRequest = (url = '', method = 'GET', data = {}, header = {}) => {
    const api = BASE_API_URL + url;
    let headers = { 'Conent-Type': 'application/json' };

    headers = { ...headers, ...header };

    return axios({
        method,
        data: (data && JSON.stringify(data)) || null,
        headers,
        url: api,
        credentials: 'same-origin',
    }).then (res => checkStatus(res));
};