import React from "react";
import { Link } from 'react-router-dom';

const Recipes = ({ title, image, matchingIngredients, missingIngredients, missedIngredients, id, likes }) => {
    return (
        
        <div class="list-section">
            <div class="wrap-list-rc">
              
              <div class="lrc-item">
                  <div class="lrc-content">
                    <div class="lrc-img">
                      <img src={image} alt="item"/>
                    </div>
                    <div class="lrc-desc">
                      <div class="lrc-title">{title}</div>
                      <div class="lrc-text">
                                Matching Ingredients:{matchingIngredients}<br/> 
                                Missing Ingredients: {missingIngredients}<br />
                                Missed Ingredients: {missedIngredients.map((ingredient) =>
                                  <li>{ingredient.name}</li>)}
                      </div>
                      <div class="lrc-button">
                        <div class="lrcb-left">
                                    <span class="lhc like"><i class="fas fa-heart"></i> {likes} </span>
                        </div>
                        <div class="lrcb-right">
                          <Link className="btn btn-success btn-sm" to={`/recipes/${id}`}>View Recipe</Link>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
            
    )
}

export default Recipes;



/////////////////////

import React from 'react'; 


function FridgeList(props) {
    const ingredients = props.ingredients;
    const listIngredients =
    ingredients ? (
        ingredients.map(ingredient => {
            return <div className="ingredients-list" key={ingredient.id}>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          {ingredient.name}
                            <span>
                                <div class="remove-favourite">
                                    <div class="awl-btn highlight">
                                        <div onClick={() => { props.deleteIngredient(ingredient.id) }} class="awl-btn-icon">
                                            <i class = "fas fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            })
            ) : (
                <p>There are no items in your fridge</p>
                );
                return (
                    < div className='text-center container'>
                    <h6 class= "text-muted mb-4 pb-2"> Your fridge Items:</h6>
            {listIngredients}
        </div>
    )
}
                 
export default FridgeList