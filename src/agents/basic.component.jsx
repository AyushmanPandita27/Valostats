import { useState } from 'react';
import {useEffect} from 'react' ;
import axios from 'axios';


import './estile.style.scss';
const Layout = () =>{
    const [searchTerm, setSearchTerm] =  useState("");
    const [user, setUser] = useState([]);

    async function fetchData() {
     
      try {
        const response = await axios.get("https://valorant-api.com/v1/agents")
        setUser(response.data.data)
        // user.map((itr)=>{console.log(itr.displayName) });
       
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => 
    {fetchData();} ,[]  );

    //agr api key nahi chal rhi toh
    let noData= <h1>LOADING!! </h1>;
    if(user.length>0){
      noData =     <div className="categories-container">
    
      {user.filter((itr)=>{
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

    return(
        <div className='upper-search'>
        <div className = 'search'>
      
        <input  type = 'text' placeholder='search OPACS' onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} />   
        </div>
          {noData}

    </div>
    );
}

export default Layout;