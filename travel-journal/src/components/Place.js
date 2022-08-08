import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export default function Place(props) {
    return (
        <div className="place">
            <div className="place--img-container">
                <img className="place--img" src={props.place.imageUrl} alt={props.place.title}/>
            </div>
            <div className="place--info-container">
                <div className="place--location-container">
                    <FontAwesomeIcon className="place--icon" icon={faLocationPin} /> 
                    <p className="place--location">
                        {props.place.location}
                    </p>
                    <a className='place--link' href={props.place.googleMapUrl}>
                        View on Google Maps
                    </a>
                </div>
                <p className="place--title">
                    {props.place.title}
                </p>
                <p className="place--date">
                   {props.place.startDate} - {props.place.endDate}
                </p>
                <p className="place--description">
                   {props.place.description}
                </p>
            </div>
        </div>
    )
}