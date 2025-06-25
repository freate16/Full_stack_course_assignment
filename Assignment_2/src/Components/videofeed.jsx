import { FaThumbsUp } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import css from './videofeed.module.css'
import { useState } from "react";
function Videofeed({
  thumbnail,
  videoTitle,
  channelName,
  views,
  uploadTime,
  likes,
  onAddToWatchLater,
  id,onRemove,
  isWatchLaterPage
}
  
){
  const [like,setLikes] = useState(likes)
  const handleLikes=() =>{
    setLikes(like+1);
  };
    return (
          <div className={`col-sm-4 ${css.rcol}`}>
            <img src={thumbnail} className={css.thumbnail}/>
            <div className={css.information}>
              <p className={css.videotitle}>{videoTitle}</p>
              <p className={css.channel}>{channelName}</p>
              <div className={css.viewdate}>
                <p>{views}</p>
                <p>{like} likes</p>
                <p>{uploadTime}</p>
              </div>
            </div>
            <div className={css.buttons}>
              {!isWatchLaterPage?(
                <>
                 <button type="button" className="btn btn-outline-primary" onClick={handleLikes}><FaThumbsUp /> Like</button>
              <button type="button" className="btn btn-outline-primary" onClick={()=>
                onAddToWatchLater &&  onAddToWatchLater ({
                  id,
                  thumbnail,
                  videoTitle,
                  channelName,
                  views,
                  uploadTime,
                  likes,
                })
              }><IoAdd/>Add to Watch Later</button></>
              ): (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onRemove && onRemove(id)}
          >
            Remove
          </button>
        )}
             
            </div>
          </div>
    );
}
export default Videofeed;