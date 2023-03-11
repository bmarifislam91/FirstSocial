import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function RightBar({profile}) {

  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" />
          <span className="birthdayText"><b>bm asif</b> and <b>3 other frieds</b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src="assets/ad.png"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriedList">
        {Users.map(u => (
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </>
    )
  };

  const ProfileRightbar = ()=>{
    return ( 
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Amarica</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Ralationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jonh Certer</span>
        </div>
      </div>
      </>
     )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
