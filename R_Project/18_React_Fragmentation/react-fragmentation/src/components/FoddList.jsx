
import FoodItem from "./FoodItem";

const FoodList =({items}) =>{
 
return(
<>
<ul className="list-group">
  {items.map((item)=>(
   <FoodItem key= {item} foodName={item}></FoodItem>
  ))}
  
 </ul>
</>
);
}

export default FoodList;