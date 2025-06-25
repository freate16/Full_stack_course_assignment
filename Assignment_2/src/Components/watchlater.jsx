import Videofeed from "./videofeed";
function Watchlater ({videos,onRemove}){
  return (
    <div>
      <div className="row" >
        {videos.length === 0?(
          <div className="col-12" style={{ textAlign: "center", padding: "2rem" }}>
      <p>No Videos added yet</p>
    </div>
        ):(videos.map((video)=>(
          <Videofeed key={video.id} {...video}
          onRemove = {onRemove}isWatchLaterPage={true}/>
        ))
        )}
      </div>
    </div>
  );
}
export default Watchlater;