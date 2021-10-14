import {Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return ( 
        <>
       	<header class="header">
		<h1 class="logo"><Link to="/" >Chillax😌 </Link></h1>
      <ul class="main-nav">
          <li> <a href="#openModal-about" className="pom-button">
              <span>Pomodoro ⏰</span>
              </a>
              </li>
          <li><Link to="/">About</Link></li>
     
      </ul>
	</header> 


    {/* MODAL */}

    <div id="openModal-about" className="modalDialog">
      <div>
         <a href="#close" title="Close" className="close">X</a>
         <h2>Modal</h2>
         <p>This is a Modal</p>
       </div>
   </div>
   
   </>
     );
}
 
export default Navbar;