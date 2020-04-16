import React from 'react'
import API from '../API'
import UserItems from './UserItems'

class Fridge extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            ingredient: {
                name: '',
                key: ''
            }
        }
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
        const ingredient = this.state.ingredient
        const object = {
            name: ingredient.name,
            user_id: this.props.user
        }
        API.addIngredient(object)
        .then(data => data.items)
        .then(object => this.setState({ ingredients: [...this.state.ingredients, object] }))
        e.target.reset()
    }
    
    removeItem = (id) => {
        API.deleteIngredient(id)
        this.setState({
            ingredients: [...this.state.ingredients].filter(ingredient => ingredient.id !== id)
        })
    }
    
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>Add Items</h1>
            <form onSubmit={this.saveIngredient}>
                <input type="text" placeholder="ingredient here" onChange={this.handleChange} />
                <button>Add Item</button>
                </form>
                {this.state.ingredients.map(ingredient => <UserItems ingredient={ingredient} name={ingredient.name} key={ingredient.key} id={ingredient.id} removeItem={this.removeItem}/>)}
            </div>
    )
    }
}

export default Fridge
