import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

/**
 * Container component that holds a list of todo's and its operations.
 * 
 * Classes used here are from materialize.css
 */
class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'Play Mario Kart' }
    ]
  }

  deleteTodo = (id) => {

    //Returns a new list without the item we want to delete:
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    //Updates the state:
    this.setState({
      todos //If key and value are the same, then this is the same as -> todos: todos
    })

  } //...deleteTodo


  addTodo = (todo) => {

    //For now we are manually generating a new id for the new item:
    todo.id = Math.random()

    //Using the spread operator to create a new array with the new TODO item at the end:
    let todos = [...this.state.todos, todo]

    //Updating the list:
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo's</h1>

        {/* passing the todo list and the deleteTodo function as props: */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

        {/* passing the addTodo as a prop: */}
        <AddTodo addTodo={this.addTodo} />

      </div>
    );
  }

}

export default App;
