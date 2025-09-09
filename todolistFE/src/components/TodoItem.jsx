function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-purple-200">
            <input
                type="checkbox"
                checked={todo.IsDone}
                onChange={onToggle}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className={`flex-1 font-medium ${todo.IsDone ? 'line-through text-green-400' : 'text-black'}`}>
        {todo.Title}
                {todo.Description && <div className="text-sm text-gray-500">{todo.Description}</div>}
      </span>
            <button
                onClick={onDelete}
                className="px-3 py-1.5 text-red-500 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors"
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem