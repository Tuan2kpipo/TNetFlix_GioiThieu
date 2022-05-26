
import { useSelector } from 'react-redux';
import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Menus from './components/Menu/Menus';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import SearchMovies from './components/SearchMovies/SearchMovies';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Pages/Search';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route exact path='/' element={ <Home></Home>}></Route>
              <Route exact path='/search' element={ <Search></Search>}></Route>
          </Routes>
      </BrowserRouter>
     
     

      {/* <SearchMovies></SearchMovies> */}
    </div>
  );
}

export default App;
