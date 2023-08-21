import { useState } from 'react';
import { MdDelete } from 'react-icons/md'

import './App.css';

const App = () => {

  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  const initialTodos = [
    { id: 1, title: "Estudar React", checked: false },
    { id: 2, title: "Estudar Inglês", checked: true },
    { id: 3, title: "Tocar guitarra", checked: false },
  ];

  const [todos,] = useState(initialTodos);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    event.preventDefault;
    console.log("submit", value);
    erase();
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onKeyDown = (event) => {

    if (event.which === ENTER_KEY) {
      submit();
    }

    else if (event.which === ESC_KEY) {
      erase();
    }
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To Do</h1>
      </header>
      <section className="main">
        <input
          className='new-todo'
          placeholder='Qual a atividade?'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id.toString} >
              <span className='todo'>
                {todo.title}
              </span>
              <button className='remove' type='button'>
                <MdDelete size={32} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </ section >
  );
};

export default App;
