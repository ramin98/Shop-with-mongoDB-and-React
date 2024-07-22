import { Link } from "react-router-dom"

function Header() {

  return (
    <header>
      <nav>
        <ul>
            <li><Link to='/'>Goods</Link></li>
            <li><Link to='/admin'>Admin</Link></li>

            <li><Link to='/bag'>Bag</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
