import { NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" exact>
                        <i className="lni lni-home"></i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" exact>
                        <i className="lni lni-text-format"></i>
                        <span>Articles</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/people" exact>
                        <i className="lni lni-users"></i>
                        <span>People</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books" exact>
                        <i className="lni lni-books"></i>
                        <span>Books</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/help" exact>
                        <i className="lni lni-support"></i>
                        <span>Help & Support</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;