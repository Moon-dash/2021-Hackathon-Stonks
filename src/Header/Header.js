import react from 'react';
import reactDom from 'react-dom';
import './header.css'
import { Link } from 'react-router-dom';

function Header()    {
    return(
        <div className={ "header-container" }>
          <img src={"https://pbs.twimg.com/profile_images/1280883056979726339/9YesHxc2_400x400.jpg"} className={"img-icon"} />
          <h4 id="header-middle">
          Stonks
          </h4>
          <div className="loginUp-button">
              <Link to="/" className="loginUp-button" >
                Login
              </Link>
          </div>
        </div>
    );
}


export default Header;
