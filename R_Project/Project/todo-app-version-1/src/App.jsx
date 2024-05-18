import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItem from "./components/AddItem";
import AddItem2 from "./components/AddItem2";
import "./App.css";
import { useState } from "react";

function App() {

  const initialToDo=[];

  const[toDoVal,SetVal]=useState(initialToDo);
  const addButtonClick=(addNewName,addNewDate)=>{
    console.log(`Name is ${addNewName} date is ${addNewDate}`)
    const newToDoItems=[...toDoVal, {name:addNewName,
    dueDate:addNewDate}]
    SetVal(newToDoItems);
  }

  const onHandleDelete=(toDoNameitem)=>
    {
      const newToDoItems=toDoVal.filter(item=>item.name!==toDoNameitem)
      SetVal(newToDoItems); 
console.log(toDoNameitem);
  }
  return (<center className="todo-container">
    <AppName />
    <AddTodo onButtonAdd={addButtonClick}/>
    <AddItem toDoItems={toDoVal} onDeleteButton={onHandleDelete}></AddItem>
  </center>);
}

export default App
