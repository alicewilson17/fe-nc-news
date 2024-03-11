import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://nc-news-uv52.onrender.com/api/"
})

export const getArticles = (topicQuery) => {
    let url = '/articles'
    if (topicQuery !== undefined) {
        url += `?topic=${topicQuery}`
    }
   return newsApi.get(url)
    .then((response) => {
        return response.data
    })
}

export const getTopics = () => {
    let url = '/topics'
   return newsApi.get(url)
    .then((response) => {
        return response.data
    })
}