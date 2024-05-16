import { TodoItem } from './TodoItem';

export function TodoList({todos,handleCheckboxChange,handleDeleteTodo}) {

    return (
        <ul className="list-items">
        { todos.length ==0 && "No Todos"}
            {todos.map(todo => {
                return(
                    <TodoItem id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        handleCheckboxChange={handleCheckboxChange}
                        handleDeleteTodo={handleDeleteTodo} />
            )
        })}
      </ul>
    )
}

export default TodoList