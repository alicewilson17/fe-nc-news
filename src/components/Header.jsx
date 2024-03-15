import { Link} from "react-router-dom"
import UserContext from "../contexts/User"
import { useContext } from "react"

const Header = () => {
    const {loggedInUser} = useContext(UserContext)
return (
    <header>
    <Link to={'/'}><h1 id="header-home">NCnews</h1></Link>
    <p>Welcome, <strong>{loggedInUser.username}</strong>!</p>
</header>
)
}

export default Header