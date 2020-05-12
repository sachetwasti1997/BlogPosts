import axios from 'axios';

//new instance of axios created
export default axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});