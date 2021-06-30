import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container"> 
            <form action="#">
                <span className="h5">Welcome back To <a href="#" className="ikure">iKure</a></span>
                <h1>Login</h1>
                <input type="email" class="input_field" placeholder="Email" />
                <input type="password" class="input_field" placeholder="Password" />
                <div className="checkbox_input">
                    <input type="checkbox" id="" className="box" value="" />
                    <span for="" className="remember_me"> Remember me</span>
                    <a href="#">Forgot password?</a>
                </div>
                <button>Login</button> 
                <div className="do_account">
                    <span for="" className="dont_account">Don't have an account ?&nbsp; <a href="#">Get Started</a></span>
                    
                </div>
            </form>
        </div>
        
        <div className="overlay-container bg_signup">
            <div className="health">
                <p>"Health is wealth"<br />
                  <p className="xyz">-xyzabcd</p> <br />
                </p>
            </div>
        </div>
      </div>
  )
}
