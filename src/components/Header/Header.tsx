import './header.css'
import { IoSearchOutline } from "react-icons/io5";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='page-header'>
            <Link to="/"><img src="/logo.png" alt="TNT-logo"/></Link>
            <div className="input-box">
                <div>
                    <div className="search-icon">
                        <IoSearchOutline/>
                    </div>
                    <input type="text" placeholder="Search here..."/>
                </div>
                <a href="/search"><button>Search</button></a>
            </div>
            <div className="nav-options">
                <a href="/purchases">Purchases</a>
                <a href="/edit-listing">Sell</a>
                <a href="/about">About</a>
                <a href="/cart">Cart</a>
                <a href="/profile">Profile</a>
            </div>
        </div>
    );
};

export default Header;