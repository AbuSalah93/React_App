
import CardComp from '../../Card/card';
import data from '../../../assets/data.json'
import './Browse.css';
import { useState } from 'react';


const Browse = () => {
  let [items,setItems] = useState (data);

 
  return (
    <>
     
      
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

export default Browse
