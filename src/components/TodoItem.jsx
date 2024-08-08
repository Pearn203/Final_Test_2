import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(index)} className="delete-button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;