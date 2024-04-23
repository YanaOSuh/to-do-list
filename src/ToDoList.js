import { Component } from "react";
import Clock from "./Clock";
import coffeeCup from './coffeeCup.png';
import { CheckItem } from "./CheckItem";

export class ToDoList extends Component {
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    crossWord(event) {
        const task = event.target;
        task.classList.toggle('crossed');
    }

    addTask(input) {
        if (input === '') {
            alert('Please enter a task')
        } else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
        }
    }

    deleteTask() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <Clock />
                <div className="userInput">
                    <input type="text" 
                            placeholder="enter a task"
                            onChange={(e) => {this.onChangeEvent(e.target.value)}}
                            value = {this.state.userInput} />
                    <button className="addButton" onClick={() => this.addTask(this.state.userInput)}>
                        Add</button>
                </div>
                <ul>
                    {this.state.toDoList.map((item, index) => (
                        <CheckItem key={index} item={item}/>
                    ))
                    }
                </ul>
                <button className="deleteButton" onClick={() => this.deleteTask()}>
                        Delete all</button>
                <div className="coffeePic">
                    <img src={coffeeCup} width="120px" alt="coffeeCup" />
                </div>
            </div>
            </form>
        )
    }
}
