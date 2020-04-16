import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import FridgeHome from './fridgeHome.png'
// import BackgroundImage from './BackgroundImage.js'


const HomePage = () => {
    return (
        <Fragment>
            <div className="background">
                <div class='text-center container'>
                    <div>
                        <h1 className="bold">FRIDGE RAIDER</h1>
                        < div class = "image-container">
                            <img src={FridgeHome} alt="image"/>
                        </div>
                        <Link class="btn btn-success" to='/sign-in'> Sign In </Link>
                        <Link class="btn btn-success" to='/sign-up'> Sign Up</Link>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage