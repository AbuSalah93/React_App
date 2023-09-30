import React from 'react';
import data from '../../assets/data.json'
import CardComp from '../Card/card';
import "./Main.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const Main =  () =>{

    let [items,setItems] = useState (data);

    function handleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;

        let filteredItems= data.filter (function(item){return item.title.toLowerCase().includes(searchedValue.toLowerCase() )})
        setItems (filteredItems);
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
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>

   


        <div className='container'>
      {items.map( function(item){
        return( 
            <CardComp image={item.image_url} title={item.title} description={item.description}/>
  
        )
  }
    )
}
</div>

        </>
    )
}
export default Main;