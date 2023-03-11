import React, { useState } from 'react';
import './post.css';
import { MdMoreVert } from "react-icons/md";
import { Users } from '../../dummyData';

export default function Post({post}) {
    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter(user => user.id === post.userId)[0].profilePicture} />
                    <span className="postUserName">{Users.filter(user => user.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MdMoreVert />
                </div>
            </div>

            <div className="postCenter">
                <span className="psotText">{post?.desc}</span>
                <img className='postImg' src={post.photo} />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" onClick={likeHandler}/>
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCmnText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
