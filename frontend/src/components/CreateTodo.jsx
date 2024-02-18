// Component

import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder = "title of the todo" onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
        }}/> <br />
        <input type="text" placeholder="description of the todo" onChange={(e) => {
           const val = e.target.value;
           setDescription(val); 
        }}/> <br />
        <button onClick={() => {
            fetch("http:/localhost/3000/todo"), {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            }
            .then(async(res) => {
                const json = await res.json
                alert("Todo added!")
        })
        }}>Add todo</button>
    </div>
}