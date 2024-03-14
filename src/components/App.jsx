import '../App.css'
import Header from './Header'
import Home from './Home'
import ArticlesForSingleTopic from './ArticlesForSingleTopic'
import SingleArticle from './SingleArticle'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../contexts/User'
import TopicsNav from './TopicsNav'

function App() {
const [loggedInUser, setLoggedInUser] = useState({
  username: "jessjelly",
name: "Jess Jelly",
avatar_url: "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg"
})
  return (
    <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
    <Header/>
    <TopicsNav/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/articles/:article_id' element = {<SingleArticle/>}/>
      <Route path = '/articles/topics/:topic' element = {<ArticlesForSingleTopic/>}/>
    </Routes>
    </UserContext.Provider>
  )
}

export default App
