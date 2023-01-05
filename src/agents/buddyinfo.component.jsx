import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import './estile.style.scss';


const Buddy = () =>{
const [buddy, setBuddy] = useState([]);
const[searchTerm, setSearchTerm] = useState("");

async function fetchData(){

    console.log("hm");
    try {
        const res = await axios.get("https://valorant-api.com/v1/buddies");
        setBuddy(res.data.data);
    } catch (error) {
      
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );

let ifNoData = <h1>LOADING!! </h1>;
if(buddy.length>0){
    ifNoData =  
    <div className="categories-container">
        
        {buddy.filter((itr)=>{
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

 <input  type = 'text' placeholder='Search OPAC buddies' onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} />  
        </div> 
       
 {ifNoData}
      
        </div>
    );
}

export default Buddy;



