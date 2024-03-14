import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {getTopics} from "../api"
import Loading from "./Loading"

const TopicsNav = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getTopics()
        .then(({topics}) => {
            setTopics(topics)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <Loading/>
    }
    
    return (
        <>
        <nav id = "topics-nav">
        Choose a topic: 
        <Link className = "topics-button" to={"/"}>All</Link> 
        {topics.map((topic) => {
            return <Link className="topics-button" to={`/articles/topics/${topic.slug}`} key = {topic.slug} >{topic.slug}</Link>
        })}
        </nav>
        </>
    )
}

export default TopicsNav