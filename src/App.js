import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div className="container" >
        <div className="row" style={{marginTop:"100px"}}>
           <div className="col-md-6 col-md-offset-3">
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} value={this.state.text} />&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-primary">{'新增 #' + (this.state.items.length)}</button>
                </form>
           </div>
        </div>
        
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;
