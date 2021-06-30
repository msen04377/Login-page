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
        <p className="back">Back</p>
        <div action="#" className="form_2">
          <span className="forget_2">Forget Password?</span>
          <h1>Login</h1>
          <input type="email" class="input_field" placeholder="Email or Phone number" />
          <div className="otp_right">
            <input type="text" className="otp" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
            <input type="text" className="otp" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
            <input type="text" className="otp" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
            <input type="text" className="otp" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
          </div>
          <div className="resend_code">
            <a href="#">Resend code</a>
            <p className="otp_time">01:40</p>
          </div>
          <button className="login_2">Login</button>
          <div className="do_account">
            <span for="" className="dont_account">Don't have an account ?&nbsp; <a href="#">Get Started</a></span>

          </div>
        </div>
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
