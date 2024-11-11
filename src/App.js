import { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoList';


export default class App extends Component {

  render() {
    return (
    <div className="App">
        <div className="header">
          <h1><span>TODO</span> List</h1>
        </div>
        <div className="mainBox">
          <ToDoList />
        </div>
        <div className="link">
          <a className="myInfo" href="https://yanaos-portfolio.glitch.me/" target="_blank" rel="noreferrer">Developed by <span className="myName">YanaOS</span></a>
        </div>
    </div>
    )
  }
}
