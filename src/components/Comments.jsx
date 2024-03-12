import { useState, useEffect } from "react"
import { getComments } from "../api"


const Comments = ({article_id}) => {
const [comments, setComments] = useState([])

useEffect(() => {
    getComments(article_id).then(({comments}) => {
        setComments(comments)
    });
}, [])

const voteOnComment = (comment_id) => {
    // will put this functionality in later
}

return (
    <div id = "comments">
        <h3>Comments</h3>
        <ol className="comments-list">
            {comments.map((comment) => {
                return (
                    <div className="comment-card" key={comment.comment_id}>
                        <p id="comment-author">{comment.author} <span id="comment-date">| {comment.created_at.slice(0,10)}</span></p>
                        <p id="comment-body">{comment.body}</p>
                        <button onClick={() => voteOnComment(comment.comment_id)}> {comment.votes} <span aria-label="votes for this comment">👍</span></button>
                    </div>
                )
            })}
        </ol>
    </div>
)
}

export default Comments