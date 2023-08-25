import React from 'react';
import {orginals, action} from './urls'
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
      
    </div>
  );
}

export default App;
