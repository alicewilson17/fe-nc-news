import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getArticleById} from "../api"


const SingleArticle = () => {
const {article_id} = useParams()
const [article, setArticle] = useState({})
const [isLoading, setIsLoading] = useState(true)


useEffect(() => {
    getArticleById(article_id).then(({article}) => {
        console.log(article.title)
        setArticle(article)
        setIsLoading(false)
    })
}, [article_id])
if (isLoading) {
    return <p>Loading.....</p>
}

return (
    <div id="single-article">
        <h2>{article.title}</h2>
        <p>
        <b>Author: </b>{article.author}
        <br></br>
        <b>Posted:</b> {article.created_at}
        <br></br>
        <b>Topic:</b> {article.topic}
        <br></br>
        <b>Votes:</b> {article.votes}
        <br></br>
        <b>Comments:</b> {article.comment_count}</p>
        <img id= "single-article-img" src={article.article_img_url}/>
        <p>{article.body}</p>
    </div>
)
}



export default SingleArticle