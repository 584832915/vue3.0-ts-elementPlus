import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = ''

const token = sessionStorage.getItem('token')
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (token) {
        config.headers.token = token
    }
    return config
})

axios.interceptors.response.use((response: AxiosResponse) => {
    if (response.data.code == -1) {
        return Promise.reject(response.data)
    }
    return response.data
}, error => {
    return Promise.reject(error)
})

export default axios;