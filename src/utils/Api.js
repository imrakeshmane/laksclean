import axios, { AxiosPromise } from 'axios';

import APIURL from './urlConfig';
const CipherVideoURL = "https://dev.vdocipher.com/api/videos/"
// const APIURL = 'https://alfapay.focohub.in/web-service/';


const callApi = (formData, url, Method,token) => {

    console.log(APIURL + url,'APIURL + url')
    const response = axios({
        url: APIURL + url,
        method: Method,
        data: formData,
        headers: {
            "Authorization":"Bearer "+token,
            "Content-Type": "application/json"
        }
    })
    return response

}
const CipherAPI = (formData, url, Method,) => {

    const response = axios({
        url: CipherVideoURL + url,
        method: Method,
        data: formData,
        headers: {
            "Content-Type":"application/json",
            "Authorization":"Apisecret ac36bd6a09474d4d974052db19990b8645e35f9a2a1e408885b16bd548ac4f87"
        }
    })
    return response

}

const postApi = (body, url,token) => {
debugger

    return new Promise((resolve, reject) => {
        callApi(body, url, 'POST',token)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
}

const putApi = (body, url,token) => {
    return new Promise((resolve, reject) => {
        callApi(body, url, 'PATCH',token)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
}

const postApiDirectURL = (body, url) => {
    debugger
    return new Promise((resolve, reject) => {
        CipherAPI(body, url, 'POST')
            .then(response => {
                debugger
                resolve(response)
            })
            .catch(error => {
                console.log(error,'errorerrorerrorerrorerror')
                reject(error)
            })
    });
}

const getApi =(url,token) =>{
    console.log('******params', token)
    return new Promise((resolve, reject) => {
        callApi('body', url, 'GET',token)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    });
}
export default {
    postApi,
    callApi,
    getApi,
    putApi,
    postApiDirectURL
}

