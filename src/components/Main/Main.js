
import data from '../../assets/data.json'
import CardComp from '../Card/card';
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  useEffect , useState } from 'react';

const Main =  () =>{

    //let [items,setItems] = useState (data);
    let [items, setMeals] = useState ([])

      async function getMealsData(){

      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      let data = await response.json();
      setMeals(data.meals)

    }

    useEffect(function(){
      
      getMealsData()}
      
      ,[])

        async function handleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;

        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchedValue)
        let data = await response.json();
        

        let filteredItems= data.meals.filter(function(item){return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase() )})
        setMeals (filteredItems);
    }

    return(
        <>
      

    
      <Form name='search' inline onSubmit={handleSubmit} id="search-bar">
        <Row>
          <Col xs="auto" >
            <Form.Control
              type="text"
              name= "search"
              placeholder="Search"
              className=" mr-sm-2"
              required
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>

   


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
export default Main;