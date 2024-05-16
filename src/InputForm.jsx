import { useState } from 'react';

export function InputForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");

    const handleAddItem = (e) => {
        setNewItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(newItem)
        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="myform">
        <div>
          <label htmlFor="item">new item</label>
                <input type="text"
                    value={newItem}
                    id="item"
                    onChange={handleAddItem} />
        </div>
        <button className="add-btn">Add</button>
      </form>
    )
}

