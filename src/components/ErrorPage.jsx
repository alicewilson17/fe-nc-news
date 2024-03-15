import { Link } from "react-router-dom";


const ErrorPage = ({error}) => {
    return (<div id="error-page"><h2>Oops! Something went wrong...</h2>
        <p>{error}.</p>
        <p><Link to={"/"}>Back to homepage</Link></p></div>
    )
  };
  
  export default ErrorPage;