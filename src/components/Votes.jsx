import { useState, useEffect } from "react"
import {upVoteArticle, downVoteArticle } from "../api"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const Votes = ({article_id, articleVotes}) => {
    const [votes, setVotes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    
useEffect(() => {
        setVotes(articleVotes)
}, [article_id])

    const upVoteOnArticle = (article_id) => {
        if (isDisliked) {
            setIsDisliked(false)
        }
        setVotes((votes) => {
            return votes + 1
        })
        setIsLiked(true)

    upVoteArticle(article_id).catch((err) => {
        console.log(err)
        setVotes((votes) => {
            return votes - 1
        })
        setIsLiked(false)
    }) 
}

const downVoteOnArticle = (article_id) => {

    setVotes((votes) => {
        return votes - 1
    })
    setIsDisliked(true)

    if (isLiked) {
        setIsLiked(false)

    }

downVoteArticle(article_id)
.catch((err) => {
    console.log(err)
    setVotes((votes) => {
        return votes + 1
    })
    setIsDisliked(false)
}) 
}

return (
    <>
    <button id="votecount">Votes: {votes}</button>
    <button className="upvote" onClick={() => upVoteOnArticle(article_id)} disabled={isLiked}><span aria-label="votes for this article"><ThumbUpIcon/></span></button>
    <button  className="downvote" onClick={() => downVoteOnArticle(article_id)} disabled={isDisliked}><span aria-label="votes for this article"><ThumbDownIcon/></span></button>
    
</>
)

}

export default Votes

