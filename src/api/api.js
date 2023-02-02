import axios from "axios";

const API_KEY = '33084008-a3c89d6e22010d199f1fde15b';

axios.defaults.baseURL = "https://pixabay.com/api";

export const searchImages = async (query, page) => {
    const response = await axios.get(`/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`);
    return response.data.hits;
}