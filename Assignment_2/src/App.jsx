import { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/header'
import Videoitems from "./Components/videoItems";
import {Videos} from './Components/videocard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Watchlater from "./Components/WatchLater";
function App() {
   const [watchLater,setWatchLater] = useState([]);
    const handleAddToWatchLater = (video) => {
        if (!watchLater.find(v => v.id ===video.id)){
            setWatchLater([...watchLater,video])
        }
    }
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
    // Start interval
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);
  const handleRemoveFromWatchLater = (id) => {
    setWatchLater(watchLater.filter(video =>video.id!== id))
  }
  return (
    <div>
      <p>Time Spent on this site: {seconds} seconds</p>
      <Router>
      <Header watchLater = {watchLater}/>
      <Routes>
        <Route path="/"
        element={
          <div style={{ margin: "25px 25px 0px" }}>
              <Videoitems
                videoitem={Videos}
                onAddToWatchLater={handleAddToWatchLater}
              />
              </div>
        }
        />
        <Route
          path="/watchlater"
          element={<Watchlater videos={watchLater} onRemove={handleRemoveFromWatchLater} />}/>
      </Routes>
    </Router>
    </div>
    
);
}

export default App;
