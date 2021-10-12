import Navbar from "./Navbar";
import "../App.css";
import Moods from "./Moods"

const HomePage = () => {
    return ( 
        <div className="home-page">
           <Navbar />
            <Moods />
        </div>
    );
}
 
export default HomePage;