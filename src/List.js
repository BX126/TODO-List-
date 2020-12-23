import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

function List() {
  const [todos, setTodos] = useState([]);
  function add(todo) {
    setTodos([todo, ...todos]);
  }

  function remove(id){
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  function complete(id){
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    }));
  }

  return (
    <>
      <h1>TODO LIST ! </h1> 
      <Form onSubmit={add} />
      <Todo
        todos={todos}
        completeTodo={complete}
        removeTodo={remove}
      />
    </>
  );
}

export default List;
