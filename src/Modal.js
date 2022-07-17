import React from 'react'

const Modal = ({open, onClose}) => {

    if(!open) return null

  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e)=>{e.stopPropagation()}} className='modalContainer'>
        <img src='https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>X</p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>CREDIT</h1>
            <p>for your first tade?</p>
          </div>
            <div className='btnContainer'>
              <button className='btnPrimary'>
                <span className='bold'>YES</span> I love NFT
              </button>
              <button className='btnOutline'>
                <span className='bold'>NO</span>, thanks 
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Modal