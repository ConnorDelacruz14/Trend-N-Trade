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

                <button>Search</button>
            </div>
            <div className="nav-options">
                <a>Sell</a>
                <a>Help</a>
                <a>About</a>
                <a>Cart</a>
                <a>Profile</a>
            </div>
        </div>
    );
};

export default Header;