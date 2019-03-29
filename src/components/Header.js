import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
    <header>
        <div className="header_title"><Link to="/"><img src="assets/images/header/newspaper.png" alt="newspaper"/></Link> Daily Beagle</div>
        <div className="header_subtitle">News ain't nothing but a hound dog.</div>
        <div className="social-media-icons">
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        </div>
    </header>
    <nav className="navbar">
        <ul className="items">
        <div></div>
            <li><Link to="/trending">Trending Now</Link></li>
            <li><Link to="/entertainment">Entertaintment</Link></li>
            <li><Link to="/worldnews">World News</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/business">Business</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header;
