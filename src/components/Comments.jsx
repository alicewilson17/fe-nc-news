import { useState, useEffect, useContext } from "react"
import { getComments } from "../api"
import CommentAdder from "./CommentAdder"
import UserContext from "../contexts/User"
import DeleteComment from "./DeleteComment"

const Comments = ({article_id}) => {
const [comments, setComments] = useState([])
const {loggedInUser} = useContext(UserContext)
const [username, setUsername] = useState(loggedInUser.username)

useEffect(() => {
    getComments(article_id).then(({comments}) => {
        setComments(comments)
    });
}, [])



return (
    <div id = "comments">
        <h3>Comments</h3>
        <CommentAdder setComments={setComments} article_id = {article_id}/>
        <ol className="comments-list">
            {comments.map((comment) => {
                return (
                    <div className="comment-card" key={comment.comment_id}>
                        <p id="comment-author">{comment.author} <span id="comment-date">| {comment.created_at.slice(0,10)} </span><span id="delete-comment-span"><DeleteComment setComments = {setComments} comment = {comment} /></span>
                    </p>
                        <p id="comment-body">{comment.body}</p>
                        
                       
                    </div>
                )
            })}
        </ol>
    </div>
)
}

export default Comments