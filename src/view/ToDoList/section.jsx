import React, { useState } from 'react';
import TodoItem from './todoItem';

function Section({ section, deleteSection }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(section.title);
    const [todos, setTodos] = useState(section.todos);

    // Menambah Todo baru
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    // Toggle status completed pada Todo
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Menghapus Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Mengubah Judul Section
    const updateTitle = () => {
        setIsEditing(false);
        section.title = newTitle;
    };

    return (
        <div className="col-span-1 bg-alabaster border-2 border-charcoal rounded-lg shadow-md p-4 mb-4 font-rubik">
            {/* Judul Section */}
            <div className="flex items-center justify-between my-5">
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-2 border-b"
                    />
                ) : (
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                )}
                <div>
                    <button
                        onClick={() => deleteSection(section.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                    >
                        Hapus Section
                    </button>
                    <button
                        onClick={isEditing ? updateTitle : () => setIsEditing(true)}
                        className="text-blue-500 hover:text-blue-700 ml-2"
                    >
                        {isEditing ? 'Simpan' : 'Edit Judul'}
                    </button>
                </div>
            </div>

            {/* Input untuk menambah Todo */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Tambah To Do List"
                    className="p-2 bg-transparent border-none border-b-2 border-charcoal"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                            addTodo(e.target.value);
                            e.target.value = ''; // Clear input after adding
                        }
                    }}
                />
            </div>

            {/* Daftar Todo */}
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default Section;
