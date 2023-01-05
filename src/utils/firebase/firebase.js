import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPsjS1eHH5PBggXtCfA23UqMV45xvSy-k",
    authDomain: "latest-dc9c3.firebaseapp.com",
    projectId: "latest-dc9c3",
    storageBucket: "latest-dc9c3.appspot.com",
    messagingSenderId: "588845942868",
    appId: "1:588845942868:web:5980bdea89d3342b7f05c1",
    measurementId: "G-R5C01CZEWS"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

provider.getCustomParameters({prompt:"select_account"});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo={}) =>{
    if(!userAuth) return;

    const userDocRef = doc(db,'users', userAuth.uid);

    const snapShot = await getDoc(userDocRef);
    if(!snapShot.exists()){
        const {displayName, email} = userAuth;
        const createdDte = new Date();
   
        try {
            await setDoc(userDocRef, {displayName, email,createdDte, ...additionalInfo});
        } catch (error) {
            console.log("error occured while signing up",error.message());
        }


    } 
    return snapShot;
};

export const createWithEmailPass = async(email,password) =>{
    //to protect our code 
    if(!email || !password  ) return;
  //TILL HERE
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInWithEmailPass = async(email,password) =>{
    //to protect our code 
    if(!email || !password  ) return;
  //TILL HERE
  return await signInWithEmailAndPassword(auth, email, password);
  
  
  
  };

  export const userSignOut = async () => await signOut(auth);