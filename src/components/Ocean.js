import { Howl } from "howler";
import OceanSound from "../audio_files/ocean.mp3"

const Ocean = () => {

    let ocean = new Howl({
        src: [OceanSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await ocean.play();
    }

    return (  

         <div className="mood-card">
          <button onClick={handlePlay} className="card-button">
                Ocean
              <br></br>
              <br></br>
        <span className="card-icon">
        <span className="iconify" data-icon="bx:bx-water" style={{fontSize:"90px"}}></span>         
        </span>
               
          </button>
            
            </div>  
    );
}
 
export default Ocean;