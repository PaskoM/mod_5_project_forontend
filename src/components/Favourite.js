import React from "react";
import { Link } from 'react-router-dom'

const Favourite = (props) => {
    return (
        
                <div class="wrap-list-rc">
                    <div class="lrc-item">
                            <div class="lrc-content">
                                <div class="lrc-img">
                                    <img src={props.favourite.image} alt="item"/>
                                </div>
                                <div class="lrc-desc">
                                    <div class="lrc-title">{props.favourite.name}</div>
                                    <div class="lrc-text">
                                        <Link className="btn btn-success btn-sm" to={`/recipes/${props.favourite.recipe_id}`}>View Recipe</Link>
                                    </div>
                                </div>
                                <div class="add-favourite">
                                    <div class="awl-btn highlight">
                                        <div onClick={() => props.removeFavourite (props.favourite.id)} class="awl-btn-icon">
                                            <i class="fas fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>           
    )
}

export default Favourite;