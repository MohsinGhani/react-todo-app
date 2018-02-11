import React, { Component } from 'react';

class InputForm extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      title: '',
      description: '',
      getTodo: {}
    }

    this.writeTitle = this.writeTitle.bind(this);
    this.writeDesc = this.writeDesc.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
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
        </div>
    );
  }

  writeTitle(event) {
    this.setState({ title: event.target.value })
  }

  writeDesc(event) {
    this.setState({ description: event.target.value })
  }

  addTodo(event) {
    if (this.state.title && this.state.description) {
      this.props.getTodo({ title: this.state.title, description: this.state.description })
      this.setState({title:'',description:''})
    }
    event.preventDefault();
  }

}

export default InputForm;
