import React,{useState} from "react";
import ToDoList from "./ToDoList";
function App() {
  const [inputText, setinputText] = useState("");
  const [items, setitems] = useState([])
  function handleChange(event) {
      setinputText(event.target.value);
  }
  function addData() {
    setitems(function(olditems){
      return [...olditems,inputText];
    })
    setinputText("");
  }
  function removeItem(id)
  {
      setitems((olditems)=>{
        return (olditems.filter((value,index)=>{
            return id!==index;
        }))
      })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <input onChange={handleChange} value={inputText} ></input>
      <button onClick={addData}><span>Add</span></button>
      <div>
        <ul>
          {items.map(function (value,index) {
            return <ToDoList key={index} id={index} value={value} onSelect={removeItem}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
