import React from 'react'

const Hotel = ({imgsrc,title,text,button}) => {
  return (
    <>
    <div className="hotelCards">
        <img src={imgsrc} alt="Pic" />
        <h2 className="title">{title}</h2>
        <p>{text}</p>
        <div className="btn">
        <button className='button'>{button}</button>
      </div>
      </div>
    
    </>
  )
}

export default Hotel
