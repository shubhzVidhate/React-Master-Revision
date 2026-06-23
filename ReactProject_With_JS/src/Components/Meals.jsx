import React, { useEffect, useState } from 'react'
import useFetch from '../CustomHooks/useFetch'

const Meals = () => {
    
const data = useFetch("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood");

const itemsList = data.map( ( { idMeal,strMeal,strMealThumb } ) => {
    return(
        <section key={idMeal} className="card">
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
})

  return <div className="items-container">{itemsList}</div>
};

export default Meals;