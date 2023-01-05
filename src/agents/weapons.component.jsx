import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import './estile.style.scss';


const Weapon = () =>{
const [gun, setGun] = useState([]);
const[searchTerm, setSearchTerm] = useState("");

async function fetchData(){

    console.log("hm");
    try {
        const res = await axios.get("https://valorant-api.com/v1/weapons");
        setGun(res.data.data);
    } catch (error) {
      
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );

let ifNoData = <h1>LOADING!! </h1>;
if(gun.length>0){
    ifNoData =  
    <div className="categories-container">
        
        {gun.filter((itr)=>{
          if(searchTerm==''){
            return itr;
          }else if(itr.displayName.toLowerCase().includes(searchTerm.toLowerCase())){
            return itr; 
          }
        }).map((itr)=>{
          return( <div className="category-container" key ={itr.uuid}>
           
            <div className='background-image' style={{
          backgroundImage: `url(${itr.displayIcon})`
        }}/>
        <div className='category-body-container'>
         <h1>{itr.displayName}</h1>
         </div>
            </div>
          );
    }
               )}
          </div>  
}

    return (
        <div className="upper-search">
            
        <div className = 'search'>

 <input  type = 'text' placeholder='Search OPAC Guns' onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} />  
        </div> 
       
 {ifNoData}
      
        </div>
    );
}

export default Weapon;



