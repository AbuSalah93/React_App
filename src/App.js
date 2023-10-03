import './App.css';

import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import { Header,Footer,Main} from './components/index';
import { Browse ,Favorites} from './components/Pages/index';



const App = () => {
  return (
    <>

         <Header />
         <Router>
          <Routes>
            <Route path='/' Component={Main}></Route>
            <Route path='/Browse' Component={Browse}></Route>
            <Route path='/favorites' Component={Favorites}></Route>
          </Routes>
         </Router>
         
         <Footer />
   
   </>
  );
}

export default App;
