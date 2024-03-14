import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getArticles} from "../api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"


const Home = () => {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
    getArticles()
    .then(({articles}) => {
setArticles(articles)
        setIsLoading(false)
    })
}, [])


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

export default Home