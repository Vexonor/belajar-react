import React, { useState } from 'react';
import Section from './section';

function MainTodo() {
    const [sections, setSections] = useState([]);
    const [title, setTitle] = useState('');

    // Menambah Section
    const addSection = () => {
        const newSection = { id: Date.now(), title: 'Untitle', todos: [] };
        setSections([...sections, newSection]);
    };

    // Menghapus Section
    const deleteSection = (id) => {
        setSections(sections.filter(section => section.id !== id));
    };

    // Mengubah Judul To-Do List
    const updateTitle = (newTitle) => {
        setTitle(newTitle);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>

                <div className="col-span-2 flex flex-col justify-center items-center">
                    {/* Tombol untuk menambah section */}
                    <button
                        onClick={addSection}
                        className="mb-4 w-full p-2 bg-charcoal text-alabaster rounded-md font-rubik"
                    >
                        Tambah To Do List
                    </button>
                </div>

                {/* Daftar Section */}
                {sections.map((section) => (
                    <Section
                        key={section.id}
                        section={section}
                        deleteSection={deleteSection}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainTodo;
