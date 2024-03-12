import { Link} from "react-router-dom"

const ArticleCard = ({article}) => {
return (
    <div className="articleCard">
        <Link className="link" to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
        <p className="articleCardInfo">Posted by {article.author} on {article.created_at.slice(0,10)}
        <br></br>
        <button className="single-article-topic">{article.topic}</button>
        <br></br>
        Votes: {article.votes}
        <br></br>
        Comments: {article.comment_count}</p>
    </div>
)
}

export default ArticleCard