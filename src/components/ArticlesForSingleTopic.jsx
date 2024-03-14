import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getArticlesByTopic} from "../api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"


const ArticlesForSingleTopic = () => {
const {topic} = useParams()
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
    getArticlesByTopic(topic)
    .then(({articles}) => {
setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => {
    console.log(err)
    })
}, [topic])


if (isLoading) {
    return <Loading/>
}

return (
    <>
    <ul className = 'articlesContainer'>
{articles.map((article) => {
    return <ArticleCard key = {article.article_id} article = {article}></ArticleCard>
})}
    </ul>
</>
)



}




export default ArticlesForSingleTopic