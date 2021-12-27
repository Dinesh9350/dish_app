import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from "./components/shared/dishes";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render(){
    return (
      <div>
        <Navbar color="primary">
          <div className='container'>
            <NavbarBrand>React Assignment 1</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
