import React, { useState } from "react";
import Mealitem from "./MealItem";
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})     
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Food APP</h1>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} />
                    <button
            className="bg-red-950 text-white rounded-md px-4 py-2 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            onClick={()=>searchMeal(search)}>
            Search
        </button>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;