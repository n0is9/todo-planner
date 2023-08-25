import React, {useState} from "react";
import {CgAddR} from 'react-icons/cg'

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev =>[
            {
                _id: Date.now(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 mt-20 w-full'>
            <input
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
            <button
                type='submit'
                onClick={()=>addTodo(title)}
            >
                <CgAddR size={24}
                        className='text-pink-400 hover:text-green-600 transition-colors ease-in-out duration-300'
                />
            </button>
        </div>
    )
}

export default CreateTodoField