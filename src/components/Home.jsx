import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getArticles, sortArticles} from "../api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"


const Home = () => {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [searchParams, setSearchParams] = useSearchParams()
const [error, setError] = useState(null)

const sort_by = searchParams.get('sort_by')
const order = searchParams.get('order')

useEffect(() => {
    getArticles()
    .then(({articles}) => {
setArticles(articles)
        setIsLoading(false)
    })
    .catch((err) => {
        setError(err.message)
    })
}, [])

const handleSortBy= (event) => {
    setIsLoading(true)
    event.preventDefault()
    const params = {sort_by: event.target[0].value, order: event.target[1].value}
   setSearchParams(params)
   sortArticles(params.sort_by, params.order).then(({articles}) => {
    setArticles(articles)
    setIsLoading(false)
   })

}

if(error) {
    return <ErrorPage error={error}/>
}
if (isLoading) {
    return <Loading/>
}

return (
    <>
    <form id="sort-by-order" onSubmit={handleSortBy}>
    <label htmlFor="sort-by">Sort by:</label>
    <select id="sort-by">
    <option value="created_at">Date posted</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
    </select>

    <label htmlFor="order" >Order:</label>
    <select id="order">
    <option value="desc">Descending</option>
    <option value="asc"> Ascending</option>
    </select>
    <button id="sort-by-button" type="submit">Submit</button>
    </form>
    <ul className = 'articlesContainer'>
{articles.map((article) => {
    return <ArticleCard key = {article.article_id} article = {article}></ArticleCard>
})}
    </ul>
</>
)



}

export default Home