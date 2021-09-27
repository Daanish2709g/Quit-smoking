import { logDOM } from "@testing-library/react";
import react from "react"
import './signup.css';
import image from './signup.gif'

const signup  = () => {
    return(
        
        <>
        <div className="head">
            <h1>Quit...yes Quit Today</h1>
            <h2>Steping towards healthy, free and focused life!!</h2>
        </div>
        <section className="signup">
            <div className = "container ">
            <div class="row">
            <div class="col">
            <div className= "signup-content">
                    <div className="sign-up form">
                        <h2 className = "form-tittle">Sign Up</h2>
                        <form className = "register-form" id="register-form">
                            <div className ="form-group">
                                <label htmlFor ="Name">
                                    <i className ="zmdi zmdi-account material-icon-name"></i>

                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder ="your name"></input>
                            </div>

                            <div className ="form-group">
                                <label htmlFor ="Email Address">
                                    <i className ="zmdi zmdi-email material-icon-name"></i>

                                </label>
                                <input type="text" name="Email Address" id="Email Address" autoComplete="off" placeholder ="Email Address"></input>
                            </div>

                            <div className ="form-group">
                                <label htmlFor ="password">
                                    <i className ="zmdi zmdi-lock material-icon-name"></i>

                                </label>
                                <input type="text" name="password" id="name" autoComplete="off" placeholder ="Password"></input>
                            </div>

                            <div className ="form-group">
                                <label htmlFor ="Confirm Password">
                                    <i className ="zmdi zmdi-lock material-icon-name"></i>

                                </label>
                                <input type="text" name="Confirm Password" id="name" autoComplete="off" placeholder ="Confirm Password"></input>
                            </div>
                            <div className="from-group from-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="SignUp"></input>

                            </div>
                            

                            
                        </form>
                        


                    </div>
                </div>
            </div>
        </div>
            </div>

            <div class="container2">
        <div class="row">
            <div class="col">
            <div className="signup-image">
                            <figure>
                                <img src ={image} alt="healthy"/>
                            </figure>

                        </div>

            </div>
        </div>
    </div>
        </section>
        </>
    )
}
 export default signup







 