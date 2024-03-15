import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";
import Votes from "./Votes";
import ErrorPage from "./ErrorPage";
import NotFoundPage from "./NotFoundPage";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [article_id]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div id="single-article">
          <h2 id="single-article-title">{article.title}</h2>
          <p>
            Posted by {article.author} on {article.created_at.slice(0, 10)}
            <br></br>
            <button className="single-article-topic">{article.topic}</button>
            <br></br>
          <Votes article_id={article_id} articleVotes={article.votes} />
          </p>
        <img id="single-article-img" src={article.article_img_url} />
          <p id="article-body">{article.body}</p>
      </div>
        <Comments article_id={article_id} />
    </>
  );
};

export default SingleArticle;
