import logo from './logo.svg';
import './App.css';
import  { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar color="primary">
        <div className='container'>
          <NavbarBrand>React Assignment 1</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
