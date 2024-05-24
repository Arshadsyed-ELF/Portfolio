import React from 'react';
import './App.css';
import Card from './Components/Card1';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Card6 from './Components/Card6';
import Card5 from './Components/Card5';
import Card4 from './Components/Card4';
import Buttons from './Components/Buttons';

const App = () => (
  <div className="App">
    <div className='card'>
    <Card />
    </div>
    <div className='card'>
    <Card2/>
    </div>
    <div className='card'>
    <Card3 />
    </div>
    <div className='card'>
    <Card4 />
    </div>
    <div className='card'>
    <Card5 />
    </div>
    <div className='card'>
    <Card6 />
    </div>
    <br/>
    <br/>
    <br/>
    <Buttons/>
    <br/>
  </div>
);

export default App;
