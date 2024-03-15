import { Link } from "react-router-dom"

const NotFoundPage = () => {
return (
    <div id="not-found">
        <h2>Oops! Page not found</h2>
        <p>It looks like the page you requested doesn't exist.</p>
        <p><Link to={"/"}>Back to homepage</Link></p>
    </div>
)
}

export default NotFoundPage