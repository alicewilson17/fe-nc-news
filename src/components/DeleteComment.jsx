import { useState, useEffect, useContext } from "react"
import UserContext from "../contexts/User"
import { deleteComment } from "../api"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const DeleteComment = ({comment, setComments}) => {
const {loggedInUser} = useContext(UserContext)
const [username, setUsername] = useState(loggedInUser.username)
const [error, setError] = useState("")

const handleDelete = (event) => {
    event.preventDefault()
    setComments((currComments) => {
        const newComments = currComments.filter((singleComment) => {
            return singleComment.comment_id !== comment.comment_id
        })
        return newComments
    })
    deleteComment(comment.comment_id)
    .then((setError(false)))
    .catch((err) => {
        setError(err.message)
        console.log(err.message)
    })
}

if (comment.author === username) {
return (<>
    <button id="delete-comment-button" onClick={handleDelete}><DeleteForeverIcon/></button>
    </>
    
)
}
}

export default DeleteComment