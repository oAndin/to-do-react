import { useState } from 'react';
import { MdDelete } from 'react-icons/md'

import './App.css';

const App = () => {

  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    setTodos([...todos,
    {
      id: new Date().getTime(),
      title: value,
      checked: false,
    }
    ]);
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

  const onChecked = (todo) => {
    setTodos(todos.map((obj) =>
      obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
    )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
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
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => { onChecked(todo) }}
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                className='remove'
                type='button'
                onClick={() => { onRemove(todo) }}
              >
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