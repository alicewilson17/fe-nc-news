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
   const url = '/topics'
   return newsApi.get(url)
    .then((response) => {
        return response.data
    })
}

export const getArticleById = (article_id) => {
    const url = `/articles/${article_id}`
    return newsApi.get(url)
    .then((response) => {
        return response.data
    })
}

export const getComments = (article_id) => {
    const url = `/articles/${article_id}/comments`
    return newsApi.get(url)
    .then((response) => {
        return response.data
    })
}