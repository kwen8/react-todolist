import React, {Component} from 'react';
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todolist: [
        'add'
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const todolist = this.state.todolist
    todolist.push(this.refs.input.value)
    this.setState({
      todolist
    })
    this.refs.input.value = ''
  }

  render() {
    return (
      <div className="App">
        <header>todolist</header>
        <ul>
          {this.state.todolist.map((item, index) => {
            return (<TodoItem value={item} key={index}></TodoItem>)
          })}
        </ul>
        <input type="text" ref='input'/>
        <button onClick={this.handleClick}>提交</button>
      </div>
    );
  }
}

export default App;
