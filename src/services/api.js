import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '482bae5d5b02c96611bbccffce713759',
    language: 'pt-BR',
    page: 1
  }
})
export default api