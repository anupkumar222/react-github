import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
        <div className="header-logo">
          <Link to="/">
            <span className="site-title">Dashboard</span>
          </Link>
        </div>
        <div className="header-search">
          <button className="button-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
              <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
            </svg>
          </button>
          <input type="search" placeholder="Search Documentation..." />
        </div>
      </div>
    )
}

export default Header