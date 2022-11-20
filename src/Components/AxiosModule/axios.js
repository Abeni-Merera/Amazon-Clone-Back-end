

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-frontend-clone-8f17c.cloudfunctions.net/api',
});

export default instance;
