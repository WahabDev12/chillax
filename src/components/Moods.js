import "../App.css";
import Rain from "./Rain";
import Bolt from "./Bolt";
import Fan from "./Fan";
import Chrip from "./Chirp";
import Library from "./Clock";
import Train from "./Train";
import Ocean from "./Ocean";
import Stadium from "./Stadium";
import Leaves from "./Leaves";



const Moods = () => {

    return (  
        <>
        <div className="moods-div">
            <Rain />
            <Bolt />
            <Chrip />
            <Fan />
            <Library />
            <Train />
            <Ocean />
            <Stadium />
            <Leaves />
           
      
        </div>
      </>
    );
}
 
export default Moods;