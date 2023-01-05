import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react'; 
import './nav.styles.scss';
import {ReactComponent as CrownLogo} from '../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../context/user.context';
import { userSignOut } from '../utils/firebase/firebase';

const Nav = () =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log(currentUser);

    const signOutHandle = async ()=>{
       await userSignOut();    
       setCurrentUser(null);
    }
 
    return(
      
<Fragment>
<div className='navigation'>

<Link className='logo-container' to='/'>
    <CrownLogo className = 'logo'/>
</Link>

<div className="nav-links-container">



   { currentUser ? (
       <Link className="nav-link" to= '/badmmr'>
       Badmaash Mmr
       </Link> 
    )
   :
    (
        <Link className="nav-link" to= '/agents'>
    Agent Info
   </Link>
  )
  }




   { currentUser ? (
       <Link className="nav-link" to= '/akmmr'>
       Akhil Mmr
       </Link> 
    )
   :
    (
        <Link className="nav-link" to= '/weapons'>
        Weapon Info
       </Link>
  )
  }



  

   { currentUser ? (
    <Link className="nav-link" to= '/danmmr'>
    Criminal Mmr
    </Link> )
   :
    (
        <Link className="nav-link" to= '/maps'>
        Maps Info
       </Link>
  )
  }




   { currentUser ? (
    <Link className="nav-link" to= '/mmr'>
   GomldFimsh Mmr
   </Link> )
   
   :
    (
        <Link className="nav-link" to= '/buddy'>
        OPAC Buddy
        </Link>
  )
  }


  
   <Link className="nav-link" to= '/ldr'>
   LeaderBoard
   </Link>
   <Link  to= '/ldrna'>
   </Link>


   <Link  to= '/ayumatch'>
   </Link>
   <Link  to= '/aksmatch'>
   </Link>
   <Link  to= '/danamatch'>
   </Link>
   <Link  to= '/akhmatch'>
   </Link>

   { currentUser ? (
    
    <span className='nav-link' onClick={signOutHandle}>Sign Out</span> ) :
    (
    <Link className="nav-link" to= '/signup'>
    Sign IN
   </Link>
  )
  }

</div>


    </div>


<Outlet/>

</Fragment>
    );
}

export default Nav;