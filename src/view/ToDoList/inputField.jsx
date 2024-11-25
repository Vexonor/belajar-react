import React, { useState } from "react";

function InputField({ addTodo }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Add a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                Add
            </button>
        </form>
    );
}

export default InputField;
