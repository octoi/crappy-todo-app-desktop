import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import DeleteDialogue from './DeleteDialogue';
import EditTodoDialogue from './EditTodoDialogue';

interface Props {
  todo: any;
  deleteTodo: () => void;
  resolveTodo: any;
  editTodo: any;
}

export default function Todo({
  todo,
  deleteTodo,
  resolveTodo,
  editTodo,
}: Props) {
  const todoRef = useRef() as any;

  const {
    onOpen: deleteOnOpen,
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const {
    onOpen: editOnOpen,
    isOpen: editIsOpen,
    onClose: editOnClose,
  } = useDisclosure();

  const handleDeleteTodo = () => {
    deleteOnClose();
    todoRef.current.classList.add('fall'); // fall animation
    setTimeout(deleteTodo, 1000); // fall animation need at least 1 sec
  };

  return (
    <>
      <div className={`todo ${todo.isDone ? 'todo-fill' : ''}`} ref={todoRef}>
        <div className='todo-content'>
          {todo.isDone && (
            <div onClick={resolveTodo} className='checked-btn'>
              <i className='fas fa-check'></i>
            </div>
          )}
          {!todo.isDone && (
            <input
              onChange={() => resolveTodo()}
              className='checkbox'
              type='checkbox'
              checked={todo.isDone}
            />
          )}
          <p className={todo.isDone ? 'completed-task' : ''}>{todo.title}</p>
        </div>
        <div>
          <button className='todo-delete' onClick={deleteOnOpen}>
            <i className='far fa-trash-alt'></i>
          </button>
          <button className='todo-edit' onClick={editOnOpen}>
            <i className='far fa-edit'></i>
          </button>
        </div>
      </div>

      {/* feedbacks */}
      <DeleteDialogue
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        handleDeleteTodo={handleDeleteTodo}
      />
      <EditTodoDialogue
        isOpen={editIsOpen}
        onClose={editOnClose}
        editTodo={editTodo}
        todoValue={todo.title}
      />
    </>
  );
}
