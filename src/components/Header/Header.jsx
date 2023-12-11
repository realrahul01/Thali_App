import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header=()=>{
    return(
      <header>
          <div className="left-nav">
            <NavLink to='/' className='logo-text'>
              <span>Thali <img src={logo} alt="error" height={'40px'} /></span>
            </NavLink>
          </div>
          <div className="right-nav">
            <ul>
              <NavLink to='/' className='logo-text'>
                <li>Home</li>
              </NavLink>
              <NavLink to='/cart' className='text-cart'>
                <li>Cart</li>
              </NavLink>
            </ul>
          </div>
      </header>
    
    )
}
export default Header;