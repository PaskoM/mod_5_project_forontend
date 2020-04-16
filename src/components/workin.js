import React from "react";
import SuggestionsList from "./SuggestionsList"

class Suggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            suggestions: false
        }
    }

        setQuery = () => {
            if (this.props.ingredients.length > 0) {
                const names = this.state.ingredients.map(ingredient => ingredient.name)
                const query = names.join(", ")
                return query
            } else {
                return null
            }
        }

    componentDidUpdate() {
        if (this.state.recipes.length === 0){
        const API_KEY = "ff3a8707d8e7473d827367805d5d69bb"
        return fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.props.query}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(recipes => this.setState({
            recipes:recipes
        }))
    }
    }
    
    changeSuggestions = () => {
        this.setState({ suggestions: !this.state.suggestions })
    }

    renderSuggestions() {
        return this.state.recipes.map(recipe => <SuggestionsList key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} matchingIngredients={recipe.usedIngredientCount} missingIngredients={recipe.missedIngredientCount} likes={recipe.likes} />)
    }
    render(
)

    {
        console.log(this.state.recipes)
        return (
            < div className='text-center container'>
                <button type="button" class="btn btn-success btn-rounded" onClick={() => this.changeSuggestions()}>{this.state.suggestions ? "Hide suggestions" : "Search Suggestions"}</button>
                {this.state.suggestions ? this.renderSuggestions() : null}
                {/* <SuggestionsList key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} matchingIngredients={recipe.usedIngredientCount} missingIngredients={recipe.missedIngredientCount} likes={recipe.likes} /> */}
        </div>
        )                
    }
       
}

export default Suggestions;