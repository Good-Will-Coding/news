import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
    <header>
        <div className="header_title"><Link to="/"><img src="assets/images/header/newspaper.png" alt="newspaper"/></Link> Daily Beagle</div>
        <div className="header_subtitle">News ain't nothing but a hound dog.</div>
    </header>
    <nav className="navbar">
        <ul className="items">
            <li><Link to="/trending">Trending Now</Link></li>
            <li><Link>Entertaintment</Link></li>
            <li><Link>World News</Link></li>
            <li><Link>Sports</Link></li>
            <li><Link>Travel</Link></li>
            <li><Link>Business</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header;
