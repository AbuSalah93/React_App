
import CardComp from '../../Card/card';
import Form from 'react-bootstrap/Form';
import './Browse.css';
import { useState,useEffect } from 'react';


const Browse = () => {
  

  let [items, setMeals] = useState ([])
  let [categories, setCategories] = useState([])
 

  async function getMealsData(){
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=m')
  let data = await response.json();
  setMeals(data.meals)

}
  async function showCategories (){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    let data = await response.json()
    setCategories(data.meals)
  }

  async function handleChange(event){
    let selectValue = event.target.value
    let response = await fetch ('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selectValue)
    let data = await response.json();

    setMeals(data.meals)
    
  }



     useEffect(function(){getMealsData()
      showCategories()
    },[])


    

  return (
    <>
    <div className='container'>
      <Form.Select aria-label="Default select example" onChange={handleChange}  >
      <option value="all">All</option>
      {categories.map(function(category){
        return <option value= {category.strCategory}>{category.strCategory}</option>
      })}
      </Form.Select>
      </div>
     
     <div className='container'>
       {items.length !== 0  ?items.map(function(item){
        return( 
        <>
            <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions} showFavorites={true}/>
          </>
        )
  }
    ) : <h3>No  results</h3>}

</div>
  
      
   
      




    </>
  )
}

export default Browse
