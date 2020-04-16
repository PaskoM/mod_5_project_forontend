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

