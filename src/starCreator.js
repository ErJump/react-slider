import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

export const starCreator = (vote) => {
    let stars = [];
    let i = 0;
    for (i; i < Math.floor(vote); i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} className="text-white"/>);
    }
    if (vote % 1 !== 0) {
        stars.push(<FontAwesomeIcon icon={faStarHalf} key={i} className="text-white"/>);
    }
    return stars;
};
