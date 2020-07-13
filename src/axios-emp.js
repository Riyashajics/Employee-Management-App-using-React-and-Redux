import axios from 'axios';


const instance= axios.create({
    baseURL: "https://empolyee-22c95.firebaseio.com/"
});

export default instance;