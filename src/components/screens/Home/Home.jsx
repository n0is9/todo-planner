import React, {useState} from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";


const data = [
    {
        _id: 'f9uw7e7f',
        title: 'make dinner',
        isCompleted: false,
    },
    {
        _id: 'eefef73',
        title: 'read book',
        isCompleted: false,
    },
    {
        _id: '02rug3u',
        title: 'do home work',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))


    return (
        <div className='text-white w-4/5 mx-auto'>
            <p className='font-bold text-2xl text-center mb-10'>My tasks</p>
            <CreateTodoField setTodos={setTodos}/>
            {todos.map(todo => (
                <TodoItem key={todo._id}
                          todo={todo}
                          changeTodo={changeTodo}
                          removeTodo={removeTodo}/>
            ))}
        </div>
    )
}
export default Home