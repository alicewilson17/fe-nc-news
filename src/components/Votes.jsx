import { useState, useEffect } from "react"
import { getArticleById, upVoteArticle, downVoteArticle } from "../api"

const Votes = ({article_id}) => {
    const [votes, setVotes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    
useEffect(() => {
    getArticleById(article_id).then(({article}) => {
        setVotes(article.votes)
    })
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
    <button onClick={() => upVoteOnArticle(article_id)} disabled={isLiked}><span aria-label="votes for this article">👍</span></button>
    <button onClick={() => downVoteOnArticle(article_id)} disabled={isDisliked}><span aria-label="votes for this article">👎</span></button>
    
</>
)

}

export default Votes

