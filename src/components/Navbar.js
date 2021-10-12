import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        
       	<header class="header">
		<h1 class="logo"><Link>Chillax😌 </Link></h1>
      <ul class="main-nav">
          <li> <button class="pom-button">
              <span>Pomodoro</span>
              </button>
              </li>
          <li><Link>About</Link></li>
     
      </ul>
	</header> 

     );
}
 
export default Navbar;