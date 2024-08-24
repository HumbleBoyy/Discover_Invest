import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import "./phone.css"
import { Link } from 'react-router-dom';
const Phone = () => {
  return (
    <>
      <div className='container'>
      <div className="phone_box">
      <Link to={"#"} className='phone_btn'>
        <FontAwesomeIcon className='phone_icon' icon={faPhone} />
        </Link>
      </div>
    </div>   
    </>
  )
}

export default Phone
