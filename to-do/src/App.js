import React, { Component } from 'react';
import Header from './components/layout/header.js'
import './App.css';
import Todos from './components/Todos.js';
import AddToDo from './components/layout/AddToDo.js';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
        {
          id: uuidv4(),
          title: 'Take the trash out',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'cook dinner for 4',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Call the agancy',
          completed: false
        }
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  //Delete the item
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  //Add to Do
  addToDo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]} );
  }

  render(){
    return ( 
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <Todos todos = {this.state.todos} markComplete={this.markComplete} del={this.delTodo}/>
        </div>
      </div>
    );
  }
}   

export default App;
