import { useState } from "react";
import Button from 'react-bootstrap/Button';
import CardComp from "../../Card/card"


function Favorites (){

    let stringedFavorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(stringedFavorites);
    let [favoritesState, setFavoritesState] = useState(favorites)

    function handleDelete (index) {

        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        
        setFavoritesState(favoritesCopy)
        let storedData = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", storedData)
      }


    return(
        <>
        <div className="container">
    {favoritesState.length !==0 ? favoritesState.map(function(item, index){
            return(
              <>
           
                <CardComp image={item.image} title={item.title} description={item.description} showFavorites={false} index = {index} 
                handleDelete={()=>{handleDelete(index)}} />

               
                
                </>
            )
        }
    ) : <h3>No search results</h3>}
    </div>
        </>
    )
}

export default Favorites