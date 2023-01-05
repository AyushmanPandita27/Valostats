import logo from './logo.svg';
import './App.css';
import Layout from './agents/basic.component';
import {Route, Routes} from 'react-router-dom'
import Nav from './nav/nav.component';
import Weapon from './agents/weapons.component';
import SignUp from './nav/authsign.component';
import Maps from './agents/maps.component';
import Buddy from './agents/buddyinfo.component';
import Mmr from './details/mmrhis.component';
import Bmmr from './details/akshaymmr.component';
import Cmmr from './details/dana.component';
import Akmmr from './details/akhil.component';
import Leaderboard from './details/leaderboardasia.component';
import LeaderboardNa from './details/leaderboardna.component';
import AyuMatch from './details/matchInfo/ayushman.component';
import AksMatch from './details/matchInfo/akshay.component';
import DanaMatch from './details/matchInfo/danamatch.component';
import AkhMatch from './details/matchInfo/akhilmatch.component';
const App = () => { 
 
  return (
  <div>
    <Routes>
      <Route path = '/' element = {<Nav/>}>
     
       <Route  index element = {<Layout/>} />
       <Route path = 'agents' element = { <Layout/>} />
       <Route path = 'signup' element = { <SignUp/>} />
       <Route path = 'weapons' element = {<Weapon/>} />
       <Route path = 'maps' element = {<Maps/>} />
       <Route path = 'buddy' element = {<Buddy/>} />
       <Route path = 'mmr' element = {<Mmr/>} />
       <Route path = 'badmmr' element = {<Bmmr/>} />
       <Route path = 'danmmr' element = {<Cmmr/>} />
       <Route path = 'akmmr' element = {<Akmmr/>} />
       <Route path = 'ldr' element = {<Leaderboard/>} />
       <Route path = 'ldrna' element = {<LeaderboardNa/>} />
       <Route path = 'ayumatch' element = {<AyuMatch/>} />
       <Route path = 'aksmatch' element = {<AksMatch/>} />
       <Route path = 'danamatch' element = {<DanaMatch/>} />
       <Route path = 'akhmatch' element = {<AkhMatch/>} />
  </Route>
   </Routes>
   </div>
  );
}

export default App;
