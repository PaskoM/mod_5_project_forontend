import React from 'react'
import API from '../API'
import FridgeList from './FridgeList'
import Suggestions from './Suggestions'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);


class FridgeCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            ingredient: {
                name: '',
                key:''
            }
        }
    }
    
    componentDidMount() {
        API.fridgeItems(localStorage.token)
        .then(json => this.setState({ingredients: json.ingredients}))
    }

    handleChange = (e) => {
        this.setState({
            ingredient: {
                name: e.target.value,
                key: Date.now()
            }
        })
    }
 
    saveIngredient = (e) => {
        e.preventDefault()
        e.target.reset()
        const ingredient = this.state.ingredient
        const object = {
            name: ingredient.name,
            user_id: this.props.user.id,
        }
        API.addIngredient(object)
        .then(data => data.ingredients)
            .then(object => this.setState({ ingredients: [...this.state.ingredients, object] }))
        .then(() => this.props.updateFridge())
    }
    
    componentDidUpdate = () => {
        if (this.state.ingredients == null){
        API.fridgeItems(localStorage.token)
            .then(json => this.setState({
                ingredients: json.ingredients
            }))
            }
    }
    

      removeIngredient = (id) => {
          API.deleteIngredient(id)
          this.setState({
              ingredients: [...this.state.ingredients].filter(ingredient => ingredient.id !== id)
          })
      }
    
    setQuery() {
        if (this.state.ingredients) {
            const names = this.state.ingredients.map(ingredient => ingredient.name)
            const query = names.join(", ")
            return query
        }
    }

//       renderIngredients = () => {
//     if (this.state.list) {
//       return this.state.ingredients.map(ingredient => <FridgeList name={ingredient.name} key={ingredient.id} id={ingredient.id} deleteIngredient={this.removeIngredient} />)
//     }
//   }
    
    render() {
        console.log(this.state.ingredients)
        console.log(this.state.ingredient)
    return (
        <div className="Fridge">
            < div class = "container margin-fridge-form z-depth-1" >
                < section class = "dark-grey-text text-center px-md-5 paddings-fridge" >
                    <div class="row">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <form class="add-ingredients-form" action="" onSubmit={this.saveIngredient}>
                                <h5 class="font-weight-bold mb-4">My Fridge</h5>
                                <p class="text-muted mb-4 pb-2">Add items to your fridge using the form below:</p>
                                <div class="input-group mb-4 pb-3">
                                    <input type="text" class="form-control" placeholder="Add ingredients here..." aria-label="Add ingredients here..." onChange={this.handleChange} />
                                    <div class="input-group-append">
                                        <button class="btn btn-success rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Add item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <FridgeList ingredients={this.state.ingredients} deleteIngredient={this.removeIngredient} />
             {/* <button onClick={() => this.props.history.push('/suggestions')}>Search recipes</button> */}
            {/* <Suggestions query={this.setQuery()} /> */}
            <Suggestions query={this.setQuery()} ingredients={this.state.ingredients}/>
            {/* <ShoppingList ingredients={this.state.ingredients}/> */}
        </div>
  );
    
}
}

export default FridgeCollection