import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <nav className="navbar">
            <FontAwesomeIcon className="navbar--icon" icon={faEarth} />
            <h1 className="navbar--title"> my travel journal</h1>
        </nav>
    )
} 