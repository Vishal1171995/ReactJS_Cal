import Styles from './FoodItem.module.css'
const FoodItem=({foodName})  =>{

  const handleBuyButtonClicked=(event)=>{
    console.log(event);
    console.log(`Buy button clicked on ${foodName}`)
  }

  return(
    <>
     <li className="list-group-item">{foodName}
     <button className={`${Styles.button} btn btn-info`}
     onClick={handleBuyButtonClicked }
     >Buy</button>
     
     </li>
     
    </>
  );

}

export default FoodItem;