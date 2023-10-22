import React from 'react'

const Button = ({filterItem,curElem}) => {
  return (
  <>
   <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}
            </button></>
 
)}

export default Button
