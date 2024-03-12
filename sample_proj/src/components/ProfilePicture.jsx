import React from 'react'



//Click event Handling- AN interaction when a user click on a specific elemrnt.We can respondn to clicks by pasting a callback to the onClick event handler

function ProfilePicture() {

    const imageUrl = './src/assets/profiile.jpeg';
    const handleClick = (e) => e.target.style.display = 'none';
  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
  )
}

export default ProfilePicture