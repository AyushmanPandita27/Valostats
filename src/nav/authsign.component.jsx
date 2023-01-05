import {auth, signInWithGooglePopup} from '../utils/firebase/firebase';
import { createUserDocFromAuth } from '../utils/firebase/firebase';
import SignUpForm from './namelogin.component';
import SignInForm from './signinwithemail.component';
import './authsign.styles.scss';
const SignUp = () =>{

    return(
        <div className='authentication-container'>
        
          {/* <button onClick = {logGoogleUser} >click me to sign up with google</button> */}
          {/* <button onClick = {signInWithGoogleRedirect }>click me to sign up with google Redirect</button> */}
         <SignInForm/>
         <SignUpForm/>
        </div>
  
      );
}

export default SignUp;