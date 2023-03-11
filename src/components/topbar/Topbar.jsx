import React from 'react';
import './topbar.css';
import { FaSearch, FaUser, FaComment, FaBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function Topbar() {

    const navigate = useNavigate();

  const profileHandle = ()=>{
    navigate("/profile")
  };
  const homeHandle = ()=>{
    navigate("/home")
  }

  return (
    <div className='topbar-container'>
        <div className="topbar-left">
          <span className="logo">Bmsocial</span>
        </div>

        <div className="topbar-center">
          <div className="serchbar">
          <FaSearch className='searchIcon'/>
          <input className='searchInput' placeholder='search here' />
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbarLinks">
            <span className="topbar-link" onClick={homeHandle}>Homepage</span>
            <span className="topbar-link">Timeline</span>
          </div>
          <div className="topbar-icon">
            <div className="topbarIcon-item">
              <FaUser />
              <span className="topbarIcon-badge">1</span>
            </div>
            <div className="topbarIcon-item">
              <FaComment />
              <span className="topbarIcon-badge">3</span>
            </div>
            <div className="topbarIcon-item">
              <FaBell />
              <span className="topbarIcon-badge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt='personImg' onClick={profileHandle} className="topbarImg" />
        </div>
    </div>
  )
}
