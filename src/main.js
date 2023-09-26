
import data from './data.json'
import CardComp from './card';
import "./main.css";

function Main (){
    return(
        <>
        <div id="container">
      {data.map( function(item){
        return( 
            <CardComp image={item.image_url} title={item.title}/>
  
        )
  }
    )
}
</div>
        </>
    )
}
export default Main;