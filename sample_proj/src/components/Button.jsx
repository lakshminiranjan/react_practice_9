import React from 'react'
import styles from './Button.module.css'

function Button() {

    // const styles={
        // background-color:"hsl(195, 53%, 70%)";
    // color: "white";
    // padding: "10px 20px";
    // border-radius:"5px";
    // border:"none";----->this is inline css
    // cursor: "pointer";
    // }
  return (
    <button className={styles.button}>Click Me</button>
  )
}

export default Button