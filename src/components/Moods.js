import "../App.css";
import Rain from "./Rain";
import Bolt from "./Bolt";
import Fan from "./Fan";
import Chirp from "./Chirp";
import Library from "./Clock";
import Train from "./Train";
import Ocean from "./Ocean";
import Stadium from "./Stadium";
import Leaves from "./Leaves";
import Footer from "./Footer";


const Moods = () => {

    return (  
        <>
        <div className="mood-tags">

            <button>Productivity</button>
            <button>Focus</button>
            <button>Relax</button>

        </div>
       
        <div className="moods-div">
            <Rain />
            <Bolt />
            <Chirp />
            <Fan />
            <Library />
            <Train />
            <Ocean />
            <Stadium />
            <Leaves />
           
      
        </div>
        <br />
            <Footer />
      </>
    );
}
 
export default Moods;