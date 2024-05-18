
import styles from './AddItem.module.css'
import { MdDelete } from "react-icons/md";


function AddItem({toDoItems,onDeleteButton}){

 
  return (

    <div className={`container text-center ${styles.mainContainer}`}>
      {toDoItems.map(item=>
        <div className={`row ${styles.mainContainer}`}>
        <div className="col-6" key={item.name}>
         {item.name}
        </div>
          <div className="col-4" key={item.dueDate}>
          {item.dueDate}
          </div>
          <div className="col-2">
      <button type="button" className={`btn btn-danger ${styles.btndelete}`} onClick={()=>onDeleteButton(item.name)}><MdDelete /></button>
      </div>
          </div>
      )}
      
    </div>
  );
}
export default AddItem;