import React, { Fragment } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import WelcomePage from './containers/WelcomePage'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import SearchForm from './components/SearchForm'
import FridgeCollTest from './components/FridgeCollTest'
import Suggestions from './components/Suggestions'
import Recipe from './components/Recipe'
import Favourites from './components/Favourites'
import ShoppingList from './components/ShoppingList'
import Menu from './components/Menu'
import Footer from './containers/Footer'
import API from "./API.js"


// Switch

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: null,
      menu: false,
      user: null,
      id: null,
      ingredients: [],
      awaitingValidation: true
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(json => {
          this.signIn(json.username, json.token, json.user, json.id)
          this.setState({
            awaitingValidation: false
          })
        })
      API.fridgeItems(localStorage.token)
        .then(json => this.setState({ingredients: json.ingredients}))
    } else {
      this.setState({ awaitingValidation: false })
    }
  }

  updateFridge = () => {
    API.fridgeItems(localStorage.token)
        .then(json => this.setState({ingredients: json.ingredients}))
  }

  signIn = (username, token, user, id) => {
    localStorage.token = token
    this.setState({
      username: username,
      user: user,
      id: id
    })
  }

  signOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
    localStorage.removeItem("recipes")
  }

  toggleMenu = () => {
     this.setState({
      menu: !this.state.menu
    })
  }

  
  loggedIn = () => localStorage.token ? true : false


  render() {
    // console.log(this.state.user)
    if (this.state.awaitingValidation) return <div>Please wait, loading page</div>
  
    return (
      <Fragment>
        {this.loggedIn() ? <Menu signOut={this.signOut} toggleMenu={this.toggleMenu} /> : <Redirect to='/'/>}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recipes' render={props => this.loggedIn() ? <SearchForm {...props} username={this.state.username} id={this.state.id} user={this.state.user} /> : <Redirect to="/"/>} />
        <Route exact path='/home' render={props => this.loggedIn() ? <WelcomePage {...props} username={this.state.username} id={this.state.id} user={this.state.user} signOut={this.signOut} /> : <Redirect to="/"/>}/>
        <Route path='/sign-in' render={props => !this.loggedIn() ? <SignInForm {...props}  signIn={this.signIn} /> : <Redirect to='/home'/> }/>
        <Route path='/sign-up' render={props => !this.loggedIn() ? <SignUpForm {...props}  signIn={this.signIn} /> : <Redirect to='/fridge-items'/> } />
        <Route path='/fridge-items' render={props => <FridgeCollTest {...props} updateFridge={this.updateFridge} username={this.state.username} id={this.state.id} user={this.state.user} />} />
        <Route exact path="/recipes/:id" render={props => <Recipe {...props} username={this.state.username} id={this.state.id} user={this.state.user} fridgeItems={this.state.ingredients} />} />
        <Route exact path="/saved" render={props => <Favourites {...props} username={this.state.username} id={this.state.id} user={this.state.user} />} />
        <Route exact path="/suggestions" render={props => <Suggestions {...props} username={this.state.username} id={this.state.id} user={this.state.user} />} />
        <Route exact path="/shopping-items" render={props => <ShoppingList {...props} username={this.state.username} id={this.state.id} user={this.state.user} />} />
        <Footer/>
      </Fragment>
    )
  }

}

export default App;
