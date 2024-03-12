import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getArticleById} from "../api"
import Loading from "./Loading"
import Comments from "./Comments"


const SingleArticle = () => {
const {article_id} = useParams()
const [article, setArticle] = useState({})
const [isLoading, setIsLoading] = useState(true)



useEffect(() => {
    getArticleById(article_id).then(({article}) => {
        setArticle(article)
        setIsLoading(false)
    })
}, [article_id])
if (isLoading) {
    return <Loading/>
}

return (
    <>
    <div id="single-article">
        <h2>{article.title}</h2>
        <p>
        Posted by {article.author} on {article.created_at.slice(0,10)}
        <br></br>
        <button className="single-article-topic">{article.topic}</button>
        <br></br>
        This article has <b>{article.votes}</b> votes and <b>{article.comment_count}</b> comments
        <br></br>
        </p>
        <img id= "single-article-img" src={article.article_img_url}/>
        <p id="article-body">{article.body}</p>
    </div>
        <Comments article_id = {article_id}/>
    </>
)
}



export default SingleArticle