import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://nc-news-uv52.onrender.com/api"
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

export const upVoteArticle = (article_id) => {
    const patchBody = {inc_votes: 1}
    const url = `/articles/${article_id}`
    return newsApi.patch(url, patchBody)
    .then((response) => {
        return response.data.article
    })
}


export const downVoteArticle = (article_id) => {
    const patchBody = {inc_votes: -1}
    const url = `/articles/${article_id}`
    return newsApi.patch(url, patchBody)
    .then((response) => {
        return response.data.article
    })
}

export const postComment = (article_id, body, username) => {
    const postBody = {username: username, body: body}
    const url = `/articles/${article_id}/comments`
    return newsApi.post(url, postBody)
    .then((response) => {
        return response.data.comment
    })
}