import { Link } from 'react-router-dom';
import './Navbar.css';
const NavbarPage = () => {
  return (
    <div className="navbar_container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 className="logo">Food Factory</h2>
      </Link>
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About us</Link>
        <Link to="/find">Find us</Link>
      </div>
    </div>
  );
};

export default NavbarPage;
