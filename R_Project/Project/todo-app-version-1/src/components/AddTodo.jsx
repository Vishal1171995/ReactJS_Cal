import { useState } from 'react';
import styles from './AddTodo.module.css'
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({onButtonAdd}){
const[toDoName,settoDoName]=useState();
const[dueDate,setDueDate]=useState();

const onHandleNameChange=(event)=>{
console.log(event.target.value);

settoDoName(event.target.value);
}
const onHandleDateChange=(event)=>{
  console.log(event.target.value);
  setDueDate(event.target.value);
  }
  
const handleonButtAdd=()=>
  {
    onButtonAdd(toDoName,dueDate);
    settoDoName("");
    setDueDate("");
    
  }

  return (
    <div className={`container text-center ${styles.container}`}>
    <div className="row">
      {}
    <div className={`col-6 ${styles.todobtn}`}>
      <input type="text" className={styles.todobtnn} placeholder="Enter todo here" value={toDoName} onChange={onHandleNameChange} />
    </div>
      <div className="col-4">
        <input type="date" placeholder="dd/MM/yy" className={styles.todobtnnDate} value={dueDate}  onChange={onHandleDateChange} />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success"
      onClick={handleonButtAdd}
      ><IoAddCircleSharp />
      </button>
      </div>
    </div>
    </div>

  );
}

export default AddTodo;