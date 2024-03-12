import React from 'react'

function Button() {

    // let count = 0;
    // const handleClick = (name) => console.log("Ouch");
    // if (count < 3 ){
    //     count++;
    //     console.log(`${name} you clicked me ${count} times` );
    // }
    // else{
    //     console.log(`${name} stop clicking me` );
    // }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    const handleClick = (e) => e.target.textContent = "Ouch! ";
  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
  )
}

export default Button