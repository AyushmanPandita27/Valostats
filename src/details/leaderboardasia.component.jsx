import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './estileTwo.style.scss';
import Button from '../button/button.component';
import LeaderboardNa from './leaderboardna.component';
import { useNavigate } from "react-router-dom";
const Leaderboard = ()=>{

    const [ldr, setLdr] = useState([]);
  
    const[searchTerm, setSearchTerm] = useState("");
    
    async function fetchData(){
    
        console.log("asia");
        try {
            const res = await axios.get("https://api.henrikdev.xyz/valorant/v1/leaderboard/ap");
            setLdr(res.data);
        } catch (error) {
          
                console.log(error);
          
        }
    }
     useEffect(() => 
        {fetchData();} ,[]  );

      
            const navigate = useNavigate();
            
    
    let ifNoData = <h1>LOADING!! </h1>;
    if(ldr.length>0){
        ifNoData =  
        <div className="categories-container">
          
          <Button type='button' buttonType='google' onClick={() => navigate("/ldrna")} >N/A </Button>
            {ldr.filter((itr)=>{
              if(searchTerm==''){
                return itr;
              }else if(itr.gameName.toLowerCase().includes(searchTerm.toLowerCase())){
                return itr; 
              }
            }).map((itr)=>{
              return( <div className="category-container" key ={itr.leaderboardRank}>
              
                <div className='background-image' style={{
          backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/projects/404/8698505.5478c3999e990.jpg)`
        }}/>


            <div className='category-body-container'>
             <h1 style={{color:'red'}}>IGN: {itr.gameName}</h1>
             <h1 style={{color:'red'}}>CURRENT RANK: {itr.leaderboardRank}</h1>
             </div>
                </div>
              );
        }
                   )}
              </div>  
    }
    

//na


        return (
            <div className="upper-search">
                
            <div className = 'search'>
    
     <input  type = 'text' placeholder='ASIA LEADERBOARD' onChange={(event)=>{
              setSearchTerm(event.target.value);
            }} />  
            </div> 
           
     {ifNoData}
 
          
            </div>
        );
        }
        

export default Leaderboard;
 