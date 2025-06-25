import { IoLogoYoutube } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import css from './header.module.css'
import Watchlater from "./WatchLater";
import { useNavigate } from "react-router-dom";
function Header({watchLater}){
    const navigate = useNavigate();
    return (
        <div className={css.headergroup}>
            <div className={css.logogroup}>
                <IoLogoYoutube className={css.logo} />
                <p>YouTube</p>
            </div>
            
            <div className={css.searchbar}>
                <input placeholder="Search" className={css.searchbox}type="text"></input>
                <button type="button" className={`btn btn-secondary ${css.searchlogo}`}><CiSearch /></button>
            </div>
            <button type="button" className={`btn btn-outline-secondary ${css.watchlater}`} onClick={() => navigate("/watchlater")}
            >Watch Later
            {watchLater.length > 0 && (
                  <span style={{ marginLeft: 8, fontWeight: "bold" }}>
                    ({watchLater.length})
                  </span>
                )}</button>
        </div>
    
);
}

export default Header;