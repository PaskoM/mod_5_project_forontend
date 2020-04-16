
    <div class="wrapper">
      <nav id="sidebarleft" class="sidenav">
        <div id="dismiss">
          <i class="fas fa-times"></i>
            </div>
            <li>
            <a href="favorite.html"><i class="fas fa-heart"></i> Favorites</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-star"></i> Rate</a>
          </li>
          <li>
            <a href="feedback.html"><i class="fas fa-envelope"></i> Feedback</a>
          </li>
          <li>
            <a href="setting.html"><i class="fas fa-cog"></i> Settings</a>
          </li>
          <li>
            <a href="single_page.html"><i class="fas fa-exclamation-circle"></i> About</a>
          </li>
      </nav>
                
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-header">
          <div class="container-fluid">
            <button type="button" id="sidebarleftbutton" class="btn">
            <i class="fas fa-align-left"></i>
            </button>
            <div class="logo">Foodkuy</div>
            <button type="button" id="sidebarrightbutton" class="btn">
            <i class="fas fa-search"></i>
            </button>
          </div>
        </nav>
    </div>




//////////////////////////////////

    <nav className="navbar navbar-expand-lg navbar-ligh bg-light transparent-nav">
      <div className="container">
        <div class = "col-12" >
        <button class="btn btn-success btn-block" onClick={() => toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          MENU
        </button>
        <div className="list" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fridge-items">MY FRIDGE</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/shopping-items">MY SHOPPING LIST</Link>
              </li>
                <li className="nav-item">
              <Link className="nav-link" to="/saved">MY FAVOURITES</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/recipes">ADVANCED SEARCH</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => signOut()}>SIGN OUT</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
        </nav>
    
    //////////////

            <h4>Search for Recipes</h4>
        {/* <h5>Search for recipe recommendations based on the ingredients that you have in the fridge:</h5> */}
        <p>Please enter ingredients, separated by comma</p>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="Submit" value="Search">Search</button>
      </form>
      
      ////////////////////////////////

              <div className="footer">
            <div class="footer-heading">Follow Us</div>
            <div class="socmed">
                <div class="socmed-line">
                    <div class="socmed-item">
                        <Link to="/home" class="si-icon"> <i class="fab fa-facebook-f"></i></Link>
                    </div>
                </div>
                <div class="socmed-line">
                    <div class="socmed-item">
                        <Link to="/home" class="si-icon"><i class="fab fa-instagram"></i></Link>
                    </div>
                </div>
                <div class="socmed-line">
                    <div class="socmed-item">
                        <Link to="/home" class="si-icon"><i class="fab fa-twitter"></i></Link>
                    </div>
                </div>
                <div class="socmed-line">
                    <div class="socmed-item">
                        <Link to="/home" class="si-icon"><i class="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
      </div>
        

        /////////////////////////////////////

            <nav class="navbar fixed-top navbar-expand-lg navbar-dark green scrolling-navbar">
        <a class="navbar-brand" href="/home"><strong>Fridge Raider</strong></a>
        <button class="navbar-toggler" onClick={() => toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link className="nav-link" to="/home">HOME <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/fridge-items">MY FRIDGE</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/shopping-items">MY SHOPPING LIST</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/saved">MY FAVOURITES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">ADVANCED SEARCH</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => signOut()}>SIGN OUT</Link>
            </li>
            </ul>
        </div>
      </nav>
    




        <div id="app-navbar">
        < nav className = "navbar fixed-top navbar-expand-lg green transparent-nav scrolling-navbar" >
      <div className="container">
        <div class = "col-12" >
        <button class="bavbar-toggler" onClick={() => toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="white-text"><i
        class="fas fa-bars fa-1x"></i></span></button>
        <div className="list" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">HOME <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fridge-items">MY FRIDGE</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/shopping-items">MY SHOPPING LIST</Link>
              </li>
                <li className="nav-item">
              <Link className="nav-link" to="/saved">MY FAVOURITES</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/recipes">ADVANCED SEARCH</Link>
            </li>
                <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => signOut()}>SIGN OUT</Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </nav>
      </div>



      ///////////

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
        item: {
          name: ''
        }
      }
    }

   componentDidMount = () => {
     API.getShopping(this.props.id)
       .then(response => {
       this.setState ({ list: response.shoppings})
       })
     console.log('state.list: '+this.state.list)
     }

    componentDidUpdate() {
      if (this.state.user_id !== null && this.state.list.length === 0) {
        API.getShopping(this.props.id)
        .then(data =>
          // console.log(data)
            this.setState({
             list: data.shoppings
            })
          )
      }
  } 

      handleChange = (e) => {
        this.setState({
            item: {
              name: e.target.value
            }
        })
    }
  
      saveItem = (e) => {
        e.preventDefault()
        e.target.reset()
        const item = this.state.item
        const object = {
          name: item.name,
          user_id: this.props.user.id,
        }
        API.addShopping(object)
        .then(data => data.shoppings)
        .then(object => this.setState({
          shoppings: [...this.state.shoppings, object]
          }))
      }
  

  removeItem = (id) => {
      console.log(id)
      API.deleteShoppingItem(id)
      this.setState({
        list: [...this.state.list].filter(item => item.id !== id)
      })
    }


  renderShopping = () => {
    if (this.state.list) {
      return this.state.list.map(item => <ShoppingItems name={item.name} key={item.id} itemId={item.id} removeItem={this.removeItem} />)
    }
  }

  render()
  {
    console.log(this.state.list)
    return (<div className="container">
          <div class = "content-wrap" >
            <h1 className="mt-100 text-center">Shopping Items:</h1>
            <div className= "list-section shopping"> {this.renderShopping()}
            </div> 
            </div> 
            </div>
        );
      }
    }

export default ShoppingList;



/////////////////////////////

