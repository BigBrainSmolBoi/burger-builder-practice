import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://angry-react-burger.firebaseio.com/',
});
export default instance;
