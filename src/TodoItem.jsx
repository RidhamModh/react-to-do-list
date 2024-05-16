export function TodoItem({completed, id, title, handleCheckboxChange, handleDeleteTodo}) {
    return (
        <li key={id}>
            <label>
                <input type="checkbox"
                    checked={completed}
                    onChange={e => handleCheckboxChange(e.target.checked, id)} />
                {title}
            </label>
            <button className="dlt-btn" onClick={() => handleDeleteTodo(id)}>Delete</button>
        </li>
    )
}