import styles from './App.module.css'
import DisplayResult from "./components/DisplayResult"
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'



function App() {
  
  const[calVal,setcalVal]=useState("");
  const onButtonclicked =(buttonText)=>{
    console.log(buttonText)
    if(buttonText=='C')
      {
        setcalVal('');
      }
      else if(buttonText=='=')
        {
          const resultVal=eval(calVal);
          setcalVal(resultVal);
        }
        else{
          const newValue=calVal+buttonText
          setcalVal(newValue);
        }
  }
  return (<>
  <div className={styles.mainDiv}>
    <DisplayResult displayValue={calVal} />
    <ButtonContainer onButtonClicks={onButtonclicked}/>
  </div>
  </>
  )
}

export default App
