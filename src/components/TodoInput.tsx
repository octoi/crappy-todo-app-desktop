import { useState } from 'react';

interface Props {
  addTodo: (todo: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (todo.trim().length === 0) {
      setError(true);
      return;
    }

    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input'>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            if (e.target.value.trim() !== '') setError(false);
          }}
          placeholder='To do ??'
          autoFocus
        />
        <button type='submit'>
          <i className='fas fa-plus'></i>
        </button>
      </div>
      {error && <p className='error-message'>Oops! Todo cannot be blank</p>}
    </form>
  );
}
