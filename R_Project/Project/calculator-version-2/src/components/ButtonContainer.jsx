import styles from './ButtonContainer.module.css'
const ButtonContainer=({onButtonClicks})=>{

  const buttonText=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','.','=']
 
  return(<>
  <div className={styles.btnContainer}>
    {buttonText.map((btnValue)=><button className={styles.btn}
     key={btnValue}
     onClick={()=>onButtonClicks(btnValue)}
     >{btnValue}</button>)}
  </div>
  </>);
}

export default ButtonContainer;