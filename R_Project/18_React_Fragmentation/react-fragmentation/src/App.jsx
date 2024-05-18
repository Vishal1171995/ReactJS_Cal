import Container from './components/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderName from './components/HeaderName'
import ErrorMessage from './components/ErrorMessage'
import FoodList from './components/FoddList'
import FoodInput from './components/FoodInput'
import { useState } from 'react'


function App() {
  let fooditem=['Roti','Dal','Green Vegetables','Milk','Salad']
  //let fooditem=[''];

  let [textShow,setTextArr]=useState("Enter the food item");


  const handleOnChange=(event)=>{
    console.log(event.target.value);
    console.log(textShow);
    setTextArr(event.target.value);
  }



  return (  <>
      <Container>
   <HeaderName></HeaderName>
   <ErrorMessage items={fooditem}></ErrorMessage>
   <FoodInput handleOnChange={handleOnChange}></FoodInput>
   <p> {textShow} </p>
  <FoodList items={fooditem}></FoodList>
  </Container>
  <Container>
    <p>This is all about the healthy food. &copy;</p>
  </Container>
  </> 
  );
}

export default App
