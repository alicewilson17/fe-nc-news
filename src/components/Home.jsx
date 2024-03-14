import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {getArticles, getTopics} from "../api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"


const Home = () => {
const [articles, setArticles] = useState([])
const [topics, setTopics] = useState([])
const [topicName, setTopicName] = useState('')
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getArticles(topicName)
    .then(({articles}) => {
setArticles(articles)
    })
    getTopics()
    .then(({topics}) => {
        setTopics(topics)
        setIsLoading(false)
    })
}, [topicName])



const handleTopicChange = (topicName) => {
    setTopicName(topicName)
}


if (isLoading) {
    return <Loading/>
}

return (
    <>
    <nav id = "topics-nav">
    Choose a topic: 
    {topics.map((topic) => {
        return <button className="topics-button" onClick={() => handleTopicChange(topic.slug)} key = {topic.slug}>{topic.slug}</button>
    })}
    </nav>
    <ul className = 'articlesContainer'>
{articles.map((article) => {
    return <ArticleCard key = {article.article_id} article = {article}></ArticleCard>
})}
    </ul>
</>
)



}

export default Home