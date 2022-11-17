import React from 'react'
import Patron from '../images/patron.png'


const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-center" style={{backgroundImage: `url(${Patron})`}} ></div>
    </div>
  )
}

export default Banner
