import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8','content-type': 'application/json' }
});

// axios.defaults.headers.common['Authorization'] = '19c4ff12-e027-4320-b844-2cda768714e8';
// axios.defaults.headers.get['Content-Type'] = 'application/json';

export default instance;