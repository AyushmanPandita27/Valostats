import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';
import './estile.style.scss';


const Maps = () =>{
const [maps, setmaps] = useState([]);
const[searchTerm, setSearchTerm] = useState("");

async function fetchData(){

    console.log("hm");
    try {
        const res = await axios.get("https://valorant-api.com/v1/maps");
        setmaps(res.data.data);
    } catch (error) {
      
            console.log(error);
      
    }
}
 useEffect(() => 
    {fetchData();} ,[]  );

let ifNoData = <h1>LOADING!! </h1>;
if(maps.length>0){
    ifNoData =  
    <div className="categories-container">
        
        {maps.filter((itr)=>{
          if(searchTerm==''){
            return itr;
          }else if(itr.displayName.toLowerCase().includes(searchTerm.toLowerCase())){
            return itr; 
          }
        }).map((itr)=>{
          return( <div className="category-container" key ={itr.uuid}>
           
            <div className='background-image' style={{
          backgroundImage: `url(${itr.listViewIcon})`
        }}/>
        <div className='category-body-container'>
         <h1>{itr.displayName}</h1>
         <p >{itr.coordinates}</p>
       
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

 <input  type = 'text' placeholder='Search OPAC mapss' onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} />  
        </div> 
       
 {ifNoData}
      
        </div>
    );
}

export default Maps;



