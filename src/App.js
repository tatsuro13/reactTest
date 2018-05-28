import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[
        {
          title: 'デフォルトTODO',
          id: 0,
        },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title){
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
