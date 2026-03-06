import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/Taskcomponent';
import Recapday1 from './components/Recapday1';
import Productscomponents from './components/Productcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fouthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Introduction to  react js</h1>
        </header>
        {/* nav links goes here  */}
        <nav>
          <Link to="/first">First component</Link><br />
          <Link to="/second">Second component</Link><br />
          <Link to="/third">Third component</Link><br />
          <Link to="/recap">Recap component</Link><br />
          <Link to="/task">Task component</Link><br />
          <Link to="/product">Products component</Link><br />
          <Link to="/fourth">Fouth component</Link><br />
          <Link to="/fifth">Fifth component</Link>
        </nav>
        
        <Routes>
          <Route path="/first" element={<Firstcomponent/>}/>
          <Route path="/second" element={<Secondcomponent/>}/>
          <Route path="/third" element={<Thirdcomponent/>}/>
          <Route path="/recap" element={<Recapday1/>}/>
          <Route path="/task" element={<Taskcomponent/>}/>
          <Route path="/product" element={<Productscomponents/>}/>
          <Route path="/fourth" element={<Fouthcomponent/>}/>
          <Route path='/fifth' element ={<Fifthcomponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
