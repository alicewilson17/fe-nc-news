import { Link} from "react-router-dom"

const ArticleCard = ({article}) => {
return (
    <div className="articleCard">
        <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
        <p className="articleCardInfo"><b>Author: </b>{article.author}
        <br></br>
        <b>Posted:</b> {article.created_at}
        <br></br>
        <b>Topic:</b> {article.topic}
        <br></br>
        <b>Votes:</b> {article.votes}
        <br></br>
        <b>Comments:</b> {article.comment_count}</p>
    </div>
)
}

export default ArticleCard