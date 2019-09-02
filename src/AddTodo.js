import React, { Component } from 'react'

/**
 * Container Component for the form to add todo items.
 */
class AddTodo extends Component {

    state = {
        content: ''
    }

    //To update the state as we type:
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    //Once the user submits the form:
    handleSubmit = (e) => {

        e.preventDefault() //Prevents the form submit    

        this.props.addTodo(this.state) //Will trigger the handler in the parent

        //Since we binded the value of the input field to "this.state.content"...
        this.setState({
            content: '' //...This will clear the field.
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>

                    {/*  */}
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo