import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';
import Button from '../../button/button.component';
import { useNavigate } from "react-router-dom";
import '../estileTwo.style.scss'

const AksMatch = () =>{
    const [match, setMatch] = useState([]);

    async function fetchData(){
        console.log("rank")
        try {
            const res = await axios.get("https://api.henrikdev.xyz/valorant/v3/matches/ap/opac%20badmaash/mdl");
            setMatch(res.data.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
     
    }

    useEffect(()=>{ fetchData(); },[]);
    
    const navigate = useNavigate();

    let ifNoData = <h1>FETCHING OPAC DATA...</h1>;
    if(match.length>0){
        ifNoData =  
        <div className="categories-container">
           
           {match.map((itr)=>{
              return( 
              
              <div className="category-container" key ={itr.metadata.matchid}>
         
         <div className='background-image' style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/772377.jpg)`
        }}/>
         
            <div className='category-body-container'>
             <h1>Map Played: {itr.metadata.map}</h1>
             <h2>Mode: {itr.metadata.mode}</h2>
             <h2 className='udi'>Rounds Played: {itr.metadata.rounds_played}</h2>
             <h2 className='udi'>Total Rounds Won: {itr.teams.red.rounds_won}</h2>
          
             {/* <p>match change to last game: {itr.match_change_to_last_game}</p> */}
           
             </div>
                </div>
              );
        }
                   )}
              </div>  
    }
    
    
    
        return (
            <div className="upper-search">
                <Button type='button' buttonType='google' onClick={()=>navigate("/badmmr")} >Go to mmr</Button> 
                <h1> OPAC badmaash's last 5 matches info.</h1>
     {ifNoData}
          
            </div>
        );
    }

export default AksMatch;