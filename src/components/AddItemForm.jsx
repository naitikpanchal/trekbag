import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({onAddItem}) {

    const [itemText, setItemText] = useState("");
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemText || !itemText.trim()) {
            alert("Item can't be empty");
            inputRef.current.focus();
            return;
        }

        onAddItem(itemText);
        setItemText("");
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input ref={inputRef} type="text" placeholder="items" autoFocus={true} value={itemText} onChange={(e) => {
                setItemText(e.target.value);
            }} />
            <Button>Add to list</Button>
        </form>
    )
}
