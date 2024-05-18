import styles from './DisplayResult.module.css'

const DisplayResult=({displayValue})=>
  {
    return(<>
    <input type='text' className={styles.displayText} readOnly value={displayValue}></input>
    </>)
  }

  export default DisplayResult;