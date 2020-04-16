import React from "react";
import { Link } from 'react-router-dom';

const Recipes = ({ title, image, id, likes }) => {
  return (
    <div class="col-md-6 mb-3">
        <div class="card">
            <img class="card-img-top" src={image} alt="item"/>
            <Link>
              <div class="mask rgba-white-slight"></div>
            </Link>
          <div class="card-body">
          <h4 class="card-title">{title}</h4>
            <hr/>
          <p class="card-text text-muted font-weight-light">Likes: {likes}</p>
          </div>
        </div>
      </div>
    )
}

export default Recipes;





