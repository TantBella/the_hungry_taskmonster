import { useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title,description) => {
        const newTodo = {
            id: Date.now(), // Denna skall tas bort när vi kopplar mot backend för då sparar todon med ID som backend returnerar.
            Title: title.trim(),
            Description: description,
            IsDone: false
        }
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, IsDone: !todo.IsDone } : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-purple-200 rounded-xl shadow-md">
            <Header />
            <TodoForm onAddTodo={addTodo} />
            <TodoList
                todos={todos}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
            />
        </div>
    )
}

export default App