import React from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer'



const WelcomePage = ({ username }) => {
  return (
      <React.Fragment>
        < div class = 'text-center container m-90'>
          <div class="container my-5">
            < section class = "dark-grey-text text-center" >
              <h4 class="font-weight-normal text-uppercase font-small grey-text mb-4">User Dashboard</h4>
            <h4 class="font-weight-bold mb-4">Welcome back {username}</h4>
            <hr class="w-header"/>
              <div class="row">
              <div class="col-md-3 mb-4">
                  <Link class="card hoverable" to="/fridge-items">
          <div class="card-body my-4">
          	<p><i class="fa fa-user-circle fa-3x" aria-hidden="true"></i></p>
            <h6 class="black-text mb-0">My Fridge</h6>      
                  </div>
                  </Link>
                  </div>
      <div class="col-md-3 mb-4">
        <Link class="card hoverable" to="/shopping-items">
          <div class="card-body my-4">
          	<p><i class="fa fa-cart-plus fa-3x" aria-hidden="true"></i></p>
            <h6 class="black-text mb-0">Shopping List</h6>
          </div>
        </Link>
      </div>
      <div class="col-md-3 mb-4">
        <Link class="card hoverable" to="/saved">
          <div class="card-body my-4">
          	<p><i class="fa fa-heart fa-3x" aria-hidden="true"></i></p>
            <h6 class="black-text mb-0">Saved Recipes</h6>
          </div>
        </Link>
      </div>
      <div class="col-md-3 mb-4">
        <Link class="card hoverable" to="/recipes">
          <div class="card-body my-4">
          	<p><i class="fa fa-search fa-3x" aria-hidden="true"></i></p>
            <h6 class="black-text mb-0">Search Recipes</h6>
                    </div>
                  </Link>
                </div>
              </div>
              </section>
              </div>
      </div> 
      </React.Fragment>
    )
};

export default WelcomePage;





