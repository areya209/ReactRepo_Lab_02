import { useState } from "react";
import { Input } from "../Input";

export const Addtodolist = (props) => {
    const [title, setTitle] = useState("Enter Your Number ToDoList");
    const [body, setBody] = useState("Enter Your Description Your ToDoList");

    const handleSubmit = () => {
        console.log("Calling to backend service");
        props.addTodolist({ title, body });
    };

    return (
        <div className="card p-3 m-2" style={{ height: "95vh" }}>
            <h1>Add ToDoList</h1>

            <Input value={title} setValue={setTitle} label="Title" />
            <Input value={body} setValue={setBody} label="Body" />

            <button onClick={handleSubmit} className="btn btn-primary">
                Add ToDoList
      </button>
        </div>
    );
};
