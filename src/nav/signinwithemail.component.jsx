import {formFields, setFormFields} from 'react';
import { useState } from 'react';
import { createWithEmailPass, createUserDocFromAuth } from '../utils/firebase/firebase';
import FormInput from './formInput.component';
import { signInWithGooglePopup, signInWithEmailPass } from '../utils/firebase/firebase';
import Button from '../button/button.component';
import './signinwithemail.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../context/user.context';

const defaultFormFields = {
   
    email:'',
    password:'',
 
}

const SignInForm = () =>{
    const [formFields, setFormFields]= useState(defaultFormFields);
    const {
    email,
    password,
  } = formFields;
    // console.log(formFields);

const {setCurrentUser} = useContext(UserContext);

const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

const signInWithGoogle = async () =>{
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const {user} = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  
  };

    //code for sign up with email/pass
const handleSubmit = async(event)=>{
event.preventDefault();

try {
    const {user} =await signInWithEmailPass(email, password);
    setCurrentUser(user);
    resetFormFields();

} catch (error) {
    switch(error.code){
        case 'auth/wrong-password':
            alert('wrong password! Are you the real OPAC??');
            break;
            case 'auth/user-not-found':
                alert('user does not exist, kindly sign up to be an OPAC');
                break;
                default:
                    console.log(error);
    }
}
}
  //till here- code for sign up with email/pass
    const handleChange = (event) =>{
         const {name, value}=event.target;
         setFormFields({...formFields, [name]:value});
         };
  
 
    return (
        <div className='sign-up-container'>
           <h1>Sign in to check for OPAC STATS</h1>
            <h2>Already have an OPAC account?</h2>
            <span>Sign In With Your Email & Password</span>
            <form onSubmit={handleSubmit}> 
            
           
             <FormInput label='Email' type = 'email' required  onChange={handleChange} name='email' value={email}/>
            
             <FormInput label='Password' type = 'password' required onChange={handleChange} name='password' value={password} />
             <div className='buttons-container'>
             <Button  type='submit'>OPACS SignIn</Button>
             <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google OPAC </Button>
           </div>
            </form>
           
        </div>
    );
}

export default SignInForm;