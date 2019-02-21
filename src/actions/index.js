import axios from 'axios';
import Cookies from 'js-cookie';
export const PROFILE_DATA = 'PROFILE_DATA';
export const API_VERSION = '/api/v1.0/';
const TOKEN = Cookies.get('leadoma_token')
const headers = {
    'ACCESS-TOKEN' : TOKEN,
}

export function logout() {
    Cookies.remove('leadoma_token');
}

export function loadProfile() {
    return (dispatch) => {
        return axios.get(API_VERSION + "users/my/info", {'headers': headers}).then((response) => {
            dispatch(dispatchData(PROFILE_DATA, response.data));
        })
    }
}

export function dispatchData(type, data) {
    return {
        type: type,
        payload: data
    }
} 