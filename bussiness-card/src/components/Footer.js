import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faInstagram, faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
        <footer className='Footer'>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faSquareTwitter} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSquareGithub} />
                </li>
            </ul>
        </footer>
    )
}