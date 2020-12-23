import React from 'react';

const Todo = ({ todos, completeTodo, removeTodo}) => {
  
  return todos.map((todo) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
        <button onClick={() => removeTodo(todo.id)}> DELETE !</button>
    </div>
  ));
};

export default Todo;
