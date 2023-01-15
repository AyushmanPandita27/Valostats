import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import '../estileTwo.style.scss'
import Button from '../../button/button.component';

const Universal= () =>{

 

const [mmr, setMmr] = useState([]);
const [reg, setReg]= useState("");
const [name, setName]= useState("");
const [tag,setTag]= useState("");


async function fetchData(){
    
    console.log("mmr");
    try {
        const res = await axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/${reg}/${name}/${tag}`);
        setMmr(res.data.data);
       
    } catch (error) {
       
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );


   


let ifNoData = <h1>Region code should be ap for Asia </h1>;
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
        <h1>Map Played: {itr.metadata.map}</h1>
             <h2>Mode: {itr.metadata.mode}</h2>
             <h2 className='udi'>Rounds Played: {itr.metadata.rounds_played}</h2>
             <h2 className='udi'>Total Rounds Won: {itr.teams.red.rounds_won}</h2>
       
         </div>
            </div>
          );
    }
               )}
          </div>  
}


    return (
        <div className="upper-search">
         
            <h1> {` ${name} last 5 matches info `}</h1>

            <div className="category-container">
<label>REGION</label>
 <input type="text" value={reg} onChange={(e)=>setReg(e.target.value)} name="region"  />
 <label>IN GAME NAME</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  name="displayName"  />
        <label>TAG</label>
        <input type="text" value = {tag} onChange={(e)=>setTag(e.target.value)}  name="tag"   />
       <Button type='button' buttonType='inverted' onClick={fetchData}>click</Button>
       </div>


<div>

{ifNoData}
</div>
        </div>
    );
}

export default Universal;



