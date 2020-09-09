import React, { useState, useEffect } from "react";
import Recipes from './Recipes';
import Recipe from './Recipe'
import { Route } from 'react-router-dom'


const SearchForm = () => {

    const API_KEY = "e3e4ca6e19d84a2c81c8c53e74c86e0f";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')
    
    
    useEffect(() => {
        getRecipes();
     }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${API_KEY}`)
        const data = await response.json()
      setRecipes(data)
      console.log(data)
    };

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }

  return (
              <div>
            <div class="container">
                <section class="dark-grey-text text-center">
                    <div class="row">
                        <div class="col-12 col-sm-8">
                            <form class="add-ingredients-form" action="" onSubmit={getSearch}>
                                <h5 class="font-weight-bold mb-4 mt-90 text-center m-90">Recipe Search</h5>
                                < p class = "text-muted mb-4 pb-2 mt-90 text-center" > Search all recipes by ingredient or name: </p>
                                <div class="input-group mb-4 pb-1">
                                    <input type="text" class="form-control" placeholder="Recipe name..." aria-label="Recipe name here..." value={search} onChange={updateSearch}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-success rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Search Recipes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        <div>
            {recipes.length > 0 ? recipes.map(recipe => <Recipes key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} matchingIngredients={recipe.usedIngredientCount} missingIngredients={recipe.missedIngredientCount} missedIngredients={recipe.missedIngredients} likes={recipe.likes} />) : null}
      </div>
        <Route exact path="/recipes/:id" component={Recipe}/>
      </div>
    )
}

export default SearchForm