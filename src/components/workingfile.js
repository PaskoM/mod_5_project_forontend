import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function FridgeList(props) {
    const ingredients = props.ingredients;
    const listIngredients =
        ingredients.length > 0 ? (
            ingredients.map(ingredient => {
                return <div className="ingredients-list" key={ingredient.id}>
                    <p>
                        <ul>{ingredient.name}</ul>
                        <span>
                            <FontAwesomeIcon className="faicons" onClick={() => { props.deleteIngredient(ingredient.id) }} icon="trash"/>
                        </span>
                    </p>
                </div>
            })
        ) : (
                <div>There are no items in your fridge</div>
            );
    return (
        <div>
            <p>Your fridge Items:</p>
            {listIngredients}
        </div>
    )
}
                 
export default FridgeList

        
    

