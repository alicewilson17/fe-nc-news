import '../App.css'
import Header from './Header'
import Home from './Home'
import ArticlesForSingleTopic from './ArticlesForSingleTopic'
import SingleArticle from './SingleArticle'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/articles/:article_id' element = {<SingleArticle/>}/>

    </Routes>
    </>
  )
}

export default App
