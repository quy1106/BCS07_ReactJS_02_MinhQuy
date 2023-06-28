import './App.css';
import Header from './Components/Header';
import ChooseGlass from './Components/ChooseGlass';


function App() {
  return (
    <div className="App container">
      <div className='body'>
        <Header />
        <div className='py-5'>
          <ChooseGlass/>
        </div>
      </div>  
    </div>
  );
}

export default App;
