import axios from 'axios';

const KEY = "AIzaSyCPject9cdzLLPhlk-7tnxdlp_oM8bhhhg";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

