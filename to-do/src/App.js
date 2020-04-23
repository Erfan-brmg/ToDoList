import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header.js';
import './App.css';
import Todos from './components/Todos.js';
import AddToDo from './components/layout/AddToDo.js';
import About from './components/pages/About.js';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state = {
    todos: []
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
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                  <AddToDo addToDo={this.addToDo}/>
                  <Todos todos = {this.state.todos} markComplete={this.markComplete} del={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}   

export default App;
