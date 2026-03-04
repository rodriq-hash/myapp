import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/Taskcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to  react js</h1>
      </header>
        <h2>About me</h2>
        <p>my names are Raphael VArane.I stay in Juja and i study at Modcom institute of technology</p>
        <h3>my favorite Artists</h3>
        <p>My favorite artists are Bruno Mars,Playboy carti,vybz kartel, spice,</p>
        <h4>My family</h4>
        <p>we are a nuclear family a total of five .I have 2 siblings and im the last born if the family.We are 2 boys and one girl.</p>
        <Firstcomponent/>
        <Taskcomponent/>
    </div>
  );
}

export default App;
