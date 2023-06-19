// css
import './Navbar.css';

// routes
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}

      {/* Utilizar sempre NavLink porque ele já imprime a classe 'active' */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar