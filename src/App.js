import React, { Component } from 'react';
import Todos from './Todos'

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
    // console.log(id);

    //Returns a new list without the item we want to delete:
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    //Updates the state:
    this.setState({
      todos //If key and value are the same, then this is the same as -> todos: todos
    })

  }

  //Here we are passing the todos list as props, as well as other functionalities.
  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

      </div>
    );
  }

}

export default App;
