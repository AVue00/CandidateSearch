import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/SavedCandidates'>
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
