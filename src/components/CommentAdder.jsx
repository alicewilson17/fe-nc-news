import { useState, useContext } from "react";
import { postComment } from "../api";
import UserContext from "../contexts/User";


const CommentAdder = ({setComments, article_id}) => {
const {loggedInUser} = useContext(UserContext)
const [newComment, setNewComment] = useState("")
const [username, setUsername] = useState(loggedInUser.username)
const [isCommentTyped, setIsCommentTyped] = useState(false)
const [error, setError] = useState("")

const handleSubmit = (event) => {
event.preventDefault()
postComment(article_id, newComment, username).then((newCommentFromApi) => {
    setNewComment("")
    setIsCommentTyped(false)
    setComments((currComments) => {
        return [newCommentFromApi, ...currComments]
    })
    setError(false)
})
.catch((err) => {
    setError(err.message)
})
}

return (
    <form className="CommentAdder" onSubmit = {handleSubmit}>
        <label htmlFor="new-comment"></label>
        <input id="new-comment" multiline = "true" value = {newComment} placeholder = "Add a comment..."
        onChange={(event) => {
            setIsCommentTyped(false)
            setNewComment(event.target.value)
            if(event.target.value !== "") {
            setIsCommentTyped(true)
            }
}}></input>
<p>{error === "" ? "" : error === false ? "Comment posted!" : `Oops! Something went wrong. Please try again. (${error})`}</p>
        <button id="add-comment-button" disabled = {!isCommentTyped} >Add</button>
    </form>
)

}


export default CommentAdder