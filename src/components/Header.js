import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
      <div className= 'ui secondary menu'>
          <Link to="/" className=" item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/shop" className="item">Shop</Link>
          <Link to='/FAQ' className="item">FAQ</Link>
          <Link to="/community" className="item">Community</Link>
          <div className="right menu">
              <div className="item">
                    <div className="ui icon input">
                      <input type="text" placeholder="Search..."></input>
                      <i className="search link icon"></i>
                  </div>
              </div>
              
          </div>
          </div>
  
    )
      
}
export default Header;