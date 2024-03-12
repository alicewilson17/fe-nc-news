import { Link} from "react-router-dom"

const Header = () => {
return (
    <header>
    <Link to={'/'}><h1 id="header-home">NCnews</h1></Link>
    <button id = "login">Log in</button>
</header>
)
}

export default Header