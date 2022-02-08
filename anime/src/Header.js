import React from 'react';
import "./Header.css";
import { auth } from "./firebase-config";
function Header() {
  return (
    <div className='header'>
      <h1>ANIME MAZE</h1>
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQup5Ftt0rmCYYHYmrdZGC8BcoBvL7PmWhLHQ&usqp=CAU" />
    </div>
  )
}

export default Header
