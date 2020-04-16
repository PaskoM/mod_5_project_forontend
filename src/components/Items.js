import React from 'react'
import API from '../API'
import UserItems from './UserItems'

class Items extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            item: {
                name: '',
                key: ''
            }
        }
    }
    
    handleChange = (e) => {
        this.setState({
            item: {
                name: e.target.value,
                key: Date.now()
            }
            })
        }

    saveIngredient = (e) => {
        e.preventDefault()
        const item = this.state.item
        const object = {
            name: item.name,
            user_id: this.props.user
        }
        API.addItem(object)
        .then(data => data.items)
        .then(object => this.setState({ items: [...this.state.items, object] }))
        e.target.reset()
    }
    
    removeItem = (id) => {
        API.deleteItem(id)
        this.setState({
            items: [...this.state.items].filter(item => item.id !== id)
        })
    }
    
    render() {
        return (
            <div>
                <h1>Add Items</h1>
            <form onSubmit={this.saveIngredient}>
                <input type="text" placeholder="ingredient here" onChange={this.handleChange} />
                <button>Add Item</button>
                </form>
                {this.state.items.map(item => <UserItems name={item.name} key={item.id} id={item.id} removeItem={this.removeItem}/>)}
            </div>
    )
    }
}

export default Items