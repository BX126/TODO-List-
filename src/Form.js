import React, { useState, useEffect } from 'react';

function Form(props) {
  const [input, setInput] = useState('');
  useEffect(() => {alert("Welcome 欢迎使用!!!");},[])

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random(),
      text: input
    });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
          <input
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>ADD!</button>
    </form>
  );
}

export default Form;
