import React from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css'

export default function Profile() {
  return (
<>
    <Topbar />
    <div className="profile">
    <SideBar />
    <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
           <img className='profileCoverImg' src="assets/post/3.jpeg"/>
            <img className='profileUserImg' src="assets/person/7.jpeg"/>
            </div>
        <div className="frofileInfo">
            <h4 className='profileInfoName'>Bm Arif</h4>
            <span className='profileInfoDesc'>Hello my friend</span>
        </div>
        </div>
    <div className="profileRightBottom">
        <Feed />
    <RightBar profile/>
        </div>
    
    </div>
    </div>
   
    </>
  )
}
