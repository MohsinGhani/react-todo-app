import React, { Component } from 'react';
import InputForm from './components/InputForm'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      title: '',
      description: '',
    }

    // this.writeTitle = this.writeTitle.bind(this);
    // this.writeDesc = this.writeDesc.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <div className="App">
      <InputForm getTodo={this.addTodo}/>
        {/* <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">TODO APPLICATI ON</h1>
            <form onSubmit={this.addTodo}>
              <div className="row todo-form">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.title} onChange={this.writeTitle} placeholder="Write Todo Title Here" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={this.writeDesc} placeholder="Write Todo Description Here" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <input type="submit" className="btn btn-primary btn-md btn-block" value="Add Todo" />
                </div>
              </div>
            </form>
          </div>
        </div> */}

        <div className="container">
          <div>
            {
              this.state.todos.map((todo, i) => {
                return <div key={i} className="alert alert-info" role="alert">
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    );
  }

  addTodo(todo) {
    console.log("parent",todo)
    var newTodo = this.state.todos.slice()
      newTodo.push({ title: todo.title, description: todo.description })
      this.setState({ todos: newTodo})
  }

}

export default App;
