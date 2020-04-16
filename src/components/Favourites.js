import React from "react"
import Favourite from "./Favourite"
// import { Link } from "react-router-dom"
import API from "../API";

class Favourites extends React.Component {
    constructor() {
      super();
      this.state = {
        favourites: [],
        user_id: null,
        image: null
      }
    }

    componentDidMount = () => {
      this.setState({
        user_id: this.props.id
      })
    }

    componentDidUpdate() {

      if (this.state.user_id !== null && this.state.favourites.length === 0) {


        API.getRecipes(this.props.id)
          .then(data => {
            console.log(data);
            this.setState({
              favourites: data.recipes
            })
          })
      } 
    }

    removeFavourite = (id) => {
      API.deleteFavourite(id)
      this.setState({
        favourites: [...this.state.favourites].filter(recipe => recipe.id !== id)
      })
    }



  renderFavourites = () => {
      return this.state.favourites.map(favourite => < Favourite favourite={
        favourite
      }
        removeFavourite={
          this.removeFavourite
        }
      />)
    } 

      render() {
        return ( <div className = "container">

          <div class = "content-wrap">
            < h5 class = "font-weight-bold mb-4 m-90 mt-100 text-center"> Saved Recipes </h5>
            <div class = "list-section favorites"> {this.renderFavourites()} 
            </div> 
            </div> 
            </div>
        );
      }
    }

    export default Favourites;
