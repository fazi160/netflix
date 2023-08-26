import React from 'react';
import {orginals, action, trending, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries} from './urls'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='Action' isSmall/>
      <RowPost url={HorrorMovies} title='Action' isSmall/>
      <RowPost url={ActionMovies} title='Action' isSmall/>
      <RowPost url={RomanceMovies} title='Action' isSmall/>
      <RowPost url={Documentaries} title='Action' isSmall/>
      
    </div>
  );
}

export default App;
