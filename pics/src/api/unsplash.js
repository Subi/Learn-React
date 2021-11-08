import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.COM",
    headers: {
        Authorization: 'Client-ID pScCeICUr4ed5yDhxSeo2OISFmaDWiBMCQ8jxjdXMk0'
    }
});

