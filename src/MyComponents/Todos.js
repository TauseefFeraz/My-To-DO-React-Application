import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style= {myStyle}>
            <h3 className="my-3">To Do's list</h3>
            {props.todos.lenght === 0 ? "No Todos to Dispay":
                props.todos.map((todo) => {
                    return (<TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
                })
            }
        </div>
    )
}
