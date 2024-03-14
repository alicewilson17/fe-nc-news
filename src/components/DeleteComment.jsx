import { useState, useEffect, useContext } from "react"
import UserContext from "../contexts/User"
import { deleteComment } from "../api"

const DeleteComment = ({comment, setComments}) => {
const {loggedInUser} = useContext(UserContext)
const [username, setUsername] = useState(loggedInUser.username)

const handleDelete = (event) => {
    event.preventDefault()
    setComments((currComments) => {
        const newComments = currComments.filter((singleComment) => {
            return singleComment.comment_id !== comment.comment_id
        })
        return newComments
    })
    deleteComment(comment.comment_id)
    .catch((err) => {
        console.log(err)
    })
}

if (comment.author === username) {
return (
    <button id="delete-comment-button" onClick={handleDelete}>Delete</button>
)
}
}

export default DeleteComment