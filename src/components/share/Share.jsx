import React from 'react';
import './share.css';
import { MdPermMedia, MdLocationOn,MdEmojiEmotions,MdLabel } from "react-icons/md";


export default function Share() {
  return (
    <div className='container'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpeg" />
                <input type="text" className='shareInput' placeholder="What's in your mind ?"/>
            </div>
            <hr className='shareHr'/>

            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia className='shareIcon media'/>
                        <span className='shareOptionText'>Photo or Vedio</span>
                    </div>
                    <div className="shareOption">
                        <MdLabel className='shareIcon label'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationOn className='shareIcon location'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions className='shareIcon emoji'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareBtn'>Share</button>
            </div>
        </div>
    </div>
  )
}
