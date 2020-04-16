import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({signOut, toggleMenu}) =>{
  return (
    <div id="app-navbar">
                  < nav class = "navbar fixed-top navbar-expand-lg navbar-dark green scrolling-navbar mb-50" >
        <button class="navbar-toggler" onClick={() => toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link className="nav-link" to="/home">HOME <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/fridge-items">MY FRIDGE</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/shopping-items">MY SHOPPING LIST</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/saved">MY FAVOURITES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">SEARCH RECIPES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => signOut()}>SIGN OUT</Link>
            </li>
            </ul>
        </div>
      </nav>
      </div>
    ) 
}

export default Menu
