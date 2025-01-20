import React from 'react';
import { useSearch } from './SearchBarContext';
import  {rawData}  from "../../db/config/rawData";
import "./SearchBar.css";
import { useNavigate } from 'react-router-dom';
import { Images } from '../../db/config/assets/Images';
 

 export default  function SearchBar(){

const navigate=useNavigate()
const { searchType } = useSearch();


const { label, placeholder, image } = rawData.searchOptions[searchType];
const handleAdd=()=>{
  navigate('/add')
}
  return (
    <div className='searchbar'>
      <img src={image} alt="image" style={{width:"20px",height:"20px"}}/>
      
      <label className='searchbar-label' >{label}</label>
      <input type="text" placeholder={placeholder}  className='searchbar-field'/>
      <button onClick={handleAdd} className='add-btn'>Add</button>
    </div>
  );
};

