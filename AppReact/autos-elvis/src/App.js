import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cartwidget from './components/Cartwidget/Cartwidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div>
      <header className='nav'>
        <Navbar />
        <Cartwidget />
        <ItemListContainer greeting={'Hola gente!'} />
        </header>
        <img src={logo} className="App-logo" alt="logo" />
          
    </div>
    </>
  );
}

export default App;
