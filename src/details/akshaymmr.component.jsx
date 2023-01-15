import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import './estileTwo.style.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

const Bmmr = () =>{
const [mmr, setMmr] = useState([]);

async function fetchData(){
    
    console.log("mmr");
    try {
        const res = await axios.get(" https://api.henrikdev.xyz/valorant/v1/mmr-history/ap/OPAC%20badmaash/mdl");
        setMmr(res.data.data);
    } catch (error) {
      
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );

    const navigate = useNavigate();

let ifNoData = <h1>FETCHING OPAC DATA...</h1>;
if(mmr.length>0){
    ifNoData =  
    <div className="categories-container">
       
       {mmr.map((itr)=>{
          return( 
          
          <div className="category-container" key ={itr.name}>
           
            <div className='background-image' style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/772377.jpg)`
        }}/>
        <div className='category-body-container'>
         <h1>Current Tier: {itr.currenttierpatched}</h1>
         <p>Date: {itr.date}</p>
         <h2>Current ranking in tier: {itr.ranking_in_tier}</h2>
         <h2>Mmr change to last game: {itr.mmr_change_to_last_game}</h2>
         </div>
            </div>
          );
    }
               )}
          </div>  
}



    return (
        <div className="upper-search">
             <Button type='button' buttonType='google' onClick={()=>navigate("/aksmatch")} >Match Details</Button> 
            <h1> OPAC badmaash's MMR History of the last competitive matches!!</h1>
 {ifNoData}
      
        </div>
    );
}

export default Bmmr;



