import React, { Component } from 'react';
import Header from './components/layout/header.js'
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {
  state = {
    todos: [
        {
          id: 1,
          title: 'Take the trash out',
          completed: false
        },
        {
          id: 2,
          title: 'cook dinner for 4',
          completed: false
        },
        {
          id: 3,
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
  render(){
    return ( 
      <div className="App">
        <Header />
        <Todos todos = {this.state.todos} markComplete={this.markComplete} del={this.delTodo}/>
      </div>
    );
  }
}   

export default App;
