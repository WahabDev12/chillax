import ReactAudioPlayer from 'react-audio-player';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



const Rain = () => {
    return (  
        <>
        <div className="moods-div">
            <div className="mood-card">
         <Link>
          <button className="card-button">
              Rain
              <span>
              <FontAwesomeIcon icon={faBolt} />
              </span>
          </button>
            
         </Link>
            </div>
        </div>
      </>
    );
}
 
export default Rain;