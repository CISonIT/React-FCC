import photo from "../images/pobrane.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Info () {
    return (
        <div className="Info">
            {/* <img className="photo" src= {photo} alt={"dsasdsa"} width="200px"/> */}
            <h2 className="h1">Jakub Cisoń</h2>
            <p className="h2">Frontend Developer</p>
            <p className="h3">jakubcison.website</p>
            <button className="button">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Email</p>
            </button>
        </div>
    )
}