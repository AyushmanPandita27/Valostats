import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import './estileTwo.style.scss';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

const Cmmr = () =>{
const [mmr, setMmr] = useState([]);

async function fetchData(){
    
    console.log("mmr");
    try {
        const res = await axios.get("https://api.henrikdev.xyz/valorant/v1/mmr-history/ap/OPAC%20Criminal/MKL");
        setMmr(res.data.data);
    } catch (error) {
      
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );

    const navigate = useNavigate();

let ifNoData = <h1>RUMKO RUMKO BHAAMI DIMKHATA HU! HUE HUE!! </h1>;
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
             <Button type='button' buttonType='google' onClick={()=>navigate("/danamatch")} >Match Details</Button> 
            <h1> OPAC CRIMINAL'S MMR History of the last competitive matches!!</h1>
 {ifNoData}
      
        </div>
    );
}

export default Cmmr;



    