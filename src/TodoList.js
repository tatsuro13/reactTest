import React, {Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    //tasks内の各TODOをTodoItemコンポーネントを用いてエレメントにしています。
    //list変数にはTodoItemエレメントの配列が入っています。
    const list = this.props.tasks.map(todo => {
      return <TodoListItem {...todo} key={todo.id} />
    });

    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TodoList;
