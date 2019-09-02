import React from 'react'

/**
 * 
 * UI Component (Does not hold any state)
 * 
 * Represents a todo list.
 * 
 */

//Destructuring props here.
const Todos = ({ todos, deleteTodo }) => {

    //So we are returning either an array or JSX templates, or a paragraph saying that we dont have any todo's left.
    const todoList = todos.length ? (
        todos.map(todo => {

            //Return an array of JSX templates if the list exists(return here runs for every item)...
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { { deleteTodo(todo.id) } }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            //...Otherwise just return a single paragraph JSX template:
            <p className="center">You have no todo's left!</p>
        )


    //So the "todoList" will either be an array of JSX templates, OR a single JSX template PARAGRAPH.
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}


export default Todos;