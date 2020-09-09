import React from "react";
import { Link } from 'react-router-dom';

const SuggestionsList = ({ image, title, matchingIngredients, missingIngredients, likes, id }) => {
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
                                Missing Ingredients: {missingIngredients}
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

export default SuggestionsList;