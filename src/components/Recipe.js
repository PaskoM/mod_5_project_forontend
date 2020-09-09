import React from "react";
// import {useHistory} from 'react-router-dom'
import API from "../API";
const API_KEY = "e3e4ca6e19d84a2c81c8c53e74c86e0f";
class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: [],
      favourites: [],
      ingredients: [],
      ingredient: [],
      shoppings: [],
      recipes: [],
      missing: false,
      missingIngredients: [],
      fridgeNames: [],
      save: false,
      user: null
    }
  }

  componentDidMount() {
    fetch(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?includeNutrition=true&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({
        recipe: data,
        ingredients: data.extendedIngredients,
        ingredient: data.extendedIngredients,
        recipes: this.state.recipes
      }))
    API.getRecipes(this.props.id)
      .then(data => {
        console.log(data);
        this.setState({
          favourites: data.recipes
        })
      }).then(this.missingIngredients())
    }
    
    addToFavorites = (recipe) => {
      recipe = this.state.recipe
      console.log(recipe)
      console.log(this.props.id)
      const object = {
        name: recipe.title,
        user_id: this.props.id,
        recipe_id: recipe.id,
        image: recipe.image
      }
      // if (this.state.favourites.includes(recipe)) return
      // this.setState({
        //   favourites: [...this.state.favourites, recipe]
        // })
        API.saveRecipe(object)
        .then(data => console.log(data))
        console.log(recipe)
      }
      
      addToShoppingList = (name) => {
        console.log(name);
        const object = {
          name: name,
          user_id: this.props.id
        }
        API.addShopping(object)
        .then(data => data.shoppings)
        .then(object => this.setState({
          shoppings: [...this.state.shoppings, object]
        }))
      }
      
  componentDidUpdate() {
    console.log(this.props.id)
    if (this.state.recipe !== null && this.state.favourites?.length > 0 && !this.state.save){
      this.favouritesIncluded()
    }
    if (!this.props.user) {
      this.setState({
        user: this.props.user
      })
    }
  
      }
      
      renderIngredients = () => {
        return this.state.ingredients.map((ingredient) => <li> {
          ingredient.name
        }</li> )
      }
  
  favouritesIncluded = () => {
    console.log(this.state.favourites[0].recipe_id)
    const recipeid = this.state.favourites.map(el => el.recipe_id)
    console.log(recipeid)
    console.log(this.state.recipe.id)
    const isSaved = recipeid.includes(this.state.recipe.id)
    if (isSaved === true) {

      this.setState({
        save: isSaved
      })
    }

      }
  
  // componentDidUpdate() {
  //   const names = this.props.fridgeItems.map(item => item.name)
  //   if (this.state.fridgeNames.length === 0){
  //   this.setState({
  //     fridgeNames: names
  //   })
  //   }
  //     }
  
  //     missingIngredients = () => {
        
  //       return this.state.ingredients.map(ingredient => ingredient.name).filter(el => !this.state.fridgeNames.includes(<li>{el}</li>))
        
  //     }
  
  //     ingredientsNames = () => {
  //       return this.state.ingredients.map(ingredient => ingredient.name)
  //     }
  
  //     fridgeItemsNames = () => {
  //       return this.props.fridgeItems.map(item => item.name)
  //     }
  
  //     intersection = () => {
  //       return this.ingredientsNames.filter(element => this.fridgeItemsNames.includes(element));
  //     }
  
  missingIngredients = () => {
    if (this.props.fridgeItems) {
      const ingredientsNames = this.state.ingredients.map(ingredient => ingredient.name)
      const fridgeItemsNames = this.props.fridgeItems.map(item => item.name)
      const missingIngredients = ingredientsNames.filter(el => !fridgeItemsNames.includes(el))
      this.setState({missingIngredients})
    }

  }

  change = () => {
    this.setState({
      missing: !this.state.missing
    })
  }
      
      
      render() {
        const activeRecipe = this.state.recipe;
        const ingredientsNames = this.state.ingredients.map(ingredient => ingredient.name)
        const fridgeItemsNames = this.props.fridgeItems.map(item => item.name)
        // const missingOnes = ingredientsNames.filter(element => element.reduce(fridgeItemsNames));
        const intersection = ingredientsNames.filter(element => fridgeItemsNames.includes(element));
        // const intersection2 = intersection.filter(element => fridgeItemsNames.includes(element));
        const missingIngredients = ingredientsNames.filter(el => !fridgeItemsNames.includes(el))
        // const intersection2 = ingredientsNames.filter(element => fridgeItemsNames.map(i => i === element));
        console.log(intersection)
        // console.log(myArray)
        console.log(this.props.id)
    return ( <div className = "" >
      <div className="recipe my-5" >
        
        <img className="recipe" src = {activeRecipe.image} alt = {activeRecipe.title}/>
        <div className="container">
          <h4 className="recipe-title bold my-3" > {activeRecipe.title} </h4>
          <p>  <span className="bold">Preparation time:</span> {activeRecipe.readyInMinutes} min <i class="fas fa-clock"></i>{this.state.save ? null :<button className="float-right my-3" onClick={() => this.addToFavorites()}><i class="fas fa-heart"></i></button> }</p>
          <p>  <span className="bold"> Dish Type:</span> {activeRecipe.dishTypes} </p>
          <p> <span className="bold">Instructions: </span> {activeRecipe.instructions} </p>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <p className="bold">Ingredients:</p>
                <ul >  {this.renderIngredients()} </ul>
              </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <p className="bold">Missing Ingredients from your fridge: </p>
                {/* <button onClick={() => this.favouritesIncluded()}>here</button> */}
                {/* <li>{this.missingIngredients()}</li> */}
                {/* <ul>{this.ingredientsNames.filter(el => this.fridgeItemsNames.includes(el))(el => <li>{el}< button onClick = {() => {this.addToShoppingList(el)}}> Add to shopping list </button></li>)}</ul> */}
                <ul>{missingIngredients.map(el => <li>{el}< button className="btn-danger float-right" onClick = {() => {this.addToShoppingList(el)}}> Add</button></li>)}</ul>
              </div>
            </div>
          
          <button className="btn-success my-3" onClick={() => this.props.history.goBack()}>Go Back</button>
           
        </div>
        
    </div> 
    </div>
  );
}
}
export default Recipe