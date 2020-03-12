import axios from 'axios'
import keys from './keys'

//setting base url for the api calls
axios.defaults.baseURL = keys.apiUrl

//for debugging

//intercept api calls
axios.interceptors.request.use((config) => {
    // console.log("a going request: ", config)
    return config
});