//Re-Rendering of the component

export function Todos({todos}){ // This todos will be passed in App.jsx re-rendering <Todo></Todo>, just like an argument to the function.
    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
            </div>
        })}

    </div>
}
