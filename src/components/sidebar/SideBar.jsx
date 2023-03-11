import React, { useState } from 'react';
import './sidebar.css';
import { MdRssFeed,
          MdOutlineChat,
            MdVideoCameraBack,
              MdGroup,
                 MdBookmark,
                  MdEvent,
                       MdCastForEducation} from "react-icons/md";
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';


export default function SideBar() {

  const [openMore, setOpenMore] = useState(false);
  
  return (
    <div className='sidebar'>
        <div className="sideWrpper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdRssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <MdOutlineChat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <MdVideoCameraBack className='sidebarIcon'/>
              <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
              <MdGroup className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <MdBookmark className='sidebarIcon'/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <MdRssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <MdRssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <MdEvent className='sidebarIcon'/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <MdCastForEducation className='sidebarIcon'/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className='sidebarBtn' onClick={()=>setOpenMore(!openMore)}>Show More</button>
          <hr className='sidebarHr'/>
          {openMore && <ul className="sidebarFriendList">
            <li className='closeFd'>Close Friends</li>
          {Users.map(u =>(
              <CloseFriend key={u.id} user={u}/>
            ))}
          </ul>}
        </div>
    </div>
  )
}
