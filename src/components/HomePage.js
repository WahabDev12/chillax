import Navbar from "./Navbar";
import "../App.css";
import Rain from "./Rain"

const HomePage = () => {
    return ( 
        <div className="home-page">
           <Navbar />
            <Rain />
        </div>
    );
}
 
export default HomePage;