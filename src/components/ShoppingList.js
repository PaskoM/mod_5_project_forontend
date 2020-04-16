import React from "react"
// import { Link } from "react-router-dom"
import ShoppingItems from "./ShoppingItems"
import API from "../API";

class ShoppingList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        user_id: null,
        item: ''
        }
      }


   componentDidMount = () => {
     API.getShopping(this.props.id)
       .then(response => {
       this.setState ({ list: response.shoppings})
       })
     console.log('state.list: '+this.state.list)
   }
  
        handleChange = (e) => {
          this.setState({
            item: e.target.value
            })
          }
        
  
        saveItem = (e) => {
          e.preventDefault()
          e.target.reset()
          const name = this.state.item
          const object = {
            name: name,
            user_id: this.props.user.id,
          }
          API.addShopping(object)
            .then(data => data.list)
            .then(object => this.setState({
              list: [...this.state.list, object]
            }))
        }

componentDidUpdate = () => {
  if (this.state.user_id !== null && this.state.list) {
    API.getShopping(this.props.id)
      .then(data =>
        // console.log(data)
        this.setState({
          list: data.shoppings
        })
      )
  }
}
     


  removeItem = (id) => {
      console.log(id)
      API.deleteShoppingItem(id)
      this.setState({
        list: [...this.state.list].filter(item => item.id !== id)
      })
    }


  renderShopping = () => {
    if (this.state.list.length > 0) {
      return this.state.list.map(item => <ShoppingItems name={item.name} key={item.id} itemId={item.id} removeItem={this.removeItem} />)
    }
  }

  render()
  {
    console.log(this.state.list)
    console.log(this.state.item)
    return (
      <div className="Shopping">
            <div class="container my-5 z-depth-1">
                <section class="dark-grey-text text-center px-md-5 py-5">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <form class="add-ingredients-form" action="" onSubmit={this.saveItem}>
                                <h5 class="font-weight-bold mb-4">My Shopping List</h5>
                                <p class="text-muted mb-4 pb-2">Add items to your shopping list using the form below:</p>
                                <div class="input-group mb-4 pb-3">
                                    <input type="text" class="form-control" placeholder="Add item here..." aria-label="Add ingredients here..." onChange={this.handleChange}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-success rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Add item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
      <div className="list-section shopping">
        {this.renderShopping()}
                  </div> 
                </section>
      </div>
    </div>
        )
      }
    }

export default ShoppingList;
    
