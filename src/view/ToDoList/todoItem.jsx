import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="flex items-center gap-4 mb-2">
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="p-2 border-b"
            />
            {/* Teks Todo */}
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
            </span>
            {/* Tombol Hapus Todo */}
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path></svg>
            </button>
        </div>
    );
}

export default TodoItem;
