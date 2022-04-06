import React from "react";
function ToDoList(props)
{
    return (
        <div className="todo">
            <li>{props.value}</li> <button onClick={()=>{
                props.onSelect(props.id);
            }}><span>Delete</span></button>
        </div>
    );
}

export default ToDoList;