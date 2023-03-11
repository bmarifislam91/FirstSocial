import React from 'react';
import './online.css'

export default function Online({user}) {
  return (
    <li className="rightbarFried">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={user.profilePicture}/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
          </li>
  )
}
