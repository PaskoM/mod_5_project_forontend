import React from "react";
import SuggestionsList from "./SuggestionsList"

class Suggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            suggestions: true
        }
    }


    componentDidMount = () => {
        const recipes = localStorage.getItem("recipes")
         if (recipes) {
            this.setState({recipes: JSON.parse(recipes)})
        } 
      }
    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevProps, this.props)
        const items = prevProps.ingredients?.length === this.props.ingredients?.length
          
        if (this.props.query && !items) {
            console.log("triggered")
            localStorage.removeItem("recipes")
            this.fetchSuggestions()
        }
        }
        
    changeSuggestions = () => {
        this.setState({ suggestions: !this.state.suggestions })
    }

    fetchSuggestions() {
        const API_KEY = "5412b0d425c04f9c8816dae3af488cdd"
        console.log(this.props.query)
        //if (this.state.recipes.length === 0 ){
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.props.query}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(recipes => {
                
                localStorage.setItem("recipes", JSON.stringify(recipes))
                    return  this.setState({
                            recipes: recipes
                        })
            })
            //}
        //return this.renderSuggestions()
    }

    renderSuggestions() {
        if (this.state.recipes.length > 0){
        return this.state.recipes.map(recipe => <SuggestionsList key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} matchingIngredients={recipe.usedIngredientCount} missingIngredients={recipe.missedIngredientCount} likes={recipe.likes} />)
    }
    }
    render(
)

    {

        return (
            < div className='text-center container'>
                <button type="button" class="btn btn-success my-3 btn-rounded" onClick={() => this.changeSuggestions()}>{this.state.suggestions ? "Suggestions" : "Show Suggestions"}</button>
                {this.state.suggestions ? this.renderSuggestions() : null}
                {/* <SuggestionsList key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} matchingIngredients={recipe.usedIngredientCount} missingIngredients={recipe.missedIngredientCount} likes={recipe.likes} /> */}
        </div>
        )                
    }
       
}

export default Suggestions;

