
import CardComp from '../../Card/card';
import Form from 'react-bootstrap/Form';
import './Browse.css';
import { useState,useEffect } from 'react';


const Browse = () => {
  

  let [items, setMeals] = useState ([])

  async function getMealsData(){

  let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
  let data = await response.json();
  setMeals(data.meals)

}



    async function handleChange(event){
    let changedCategory= event.target.value

    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data = await response.json();

    if(changedValue==="all"){
      console.log(changedCategory)
      setMeals(data.meals)
  }
  else{

    let filteredItems= data.meals.filter(function(item){return item.Category.strCategory>changedCategory&& item.Category.strCategory<=changedCategory})
    setMeals (filteredItems);
  }

     }

     useEffect(function(){getMealsData()},[])

     let Category = ["Beef","Breakfast","Chicken","Dessert","Vegetarian"]

  return (
    <>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        {Category.map(fu)}
      <option value="all">All</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Select>
     
     <div className='container'>
       {items.length !==0 ? items.map(function(item){
        return( 
        <>
            <CardComp image={item.strMealThumb} title={item.strMeal} description={item.strInstructions}/>
          </>
        )
  }
    ) : <h3>No search results</h3>}

</div>
  
      
   
      




    </>
  )
}

export default Browse
