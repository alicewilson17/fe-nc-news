import { useState, useEffect } from "react"
import { getComments } from "../api"


const Comments = ({article_id}) => {
const [comments, setComments] = useState([])

useEffect(() => {
    getComments(article_id).then(({comments}) => {
        setComments(comments)
    });
}, [])


return (
    <div id = "comments">
        <h3>Comments</h3>
        <ol className="comments-list">
            {comments.map((comment) => {
                return (
                    <div className="comment-card" key={comment.comment_id}>
                        <p id="comment-author">{comment.author} <span id="comment-date">| {comment.created_at.slice(0,10)}</span></p>
                        <p id="comment-body">{comment.body}</p>
                        <p>Votes: {comment.votes}</p>
                    </div>
                )
            })}
        </ol>
    </div>
)
}

export default Comments