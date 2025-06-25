import Videofeed from "./videofeed"
function Videoitems({videoitem,onAddToWatchLater}){
  return (
    <>
    <div className="row" style={{ marginTop: "50px" }}>
      {videoitem.map((item) => (
        <Videofeed
          key={item.id}
          id= {item.id}
          thumbnail = {item.thumbnail}
          videoTitle = {item.title}
          channelName = {item.channel}
          views = {item.views}
          uploadTime = {item.time}
          likes = {item.likes}
          onAddToWatchLater={onAddToWatchLater}
          >
          
        </Videofeed>
      ))}

    </div>
    </>
  )
}
export default Videoitems;