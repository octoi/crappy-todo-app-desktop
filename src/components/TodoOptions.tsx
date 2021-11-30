import React from 'react';

interface Props {
  setFilter: any;
  filter: any;
}

export default function TodoOptions({ setFilter, filter }: Props) {
  return (
    <div className='options'>
      <button
        className={filter === 'all' ? 'selected-btn' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={filter === 'done' ? 'selected-btn' : ''}
        onClick={() => setFilter('done')}
      >
        Completed
      </button>
      <button
        className={filter === 'todo' ? 'selected-btn' : ''}
        onClick={() => setFilter('todo')}
      >
        Todo
      </button>
    </div>
  );
}
