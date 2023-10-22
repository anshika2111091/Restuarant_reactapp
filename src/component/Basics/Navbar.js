import React from 'react';
import Button from './Button';

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
    <nav className='navbar'>
    <div className='btn-group'>
{
    menuList.map((curElem)=>{
        return <>
        <Button filterItem={filterItem} curElem={curElem}/>
       </>

    })
}



       
    </div>
  </nav>

    </>
  )
}

export default Navbar
