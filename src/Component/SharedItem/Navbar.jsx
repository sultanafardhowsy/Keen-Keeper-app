
import logo from '../../assets/logo.png'
import { TiHomeOutline } from "react-icons/ti";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from 'react-router';

const Navbar = () => {

  
    const links =(
        <>
        
            <NavLink 
            to={'/'}
            className={({isActive}) =>
                `font-semibold mr-1 flex items-center gap-1 px-2 py-2 rounded-box ${isActive ? "text-white border bg-green-700" : ""}`
            }
            ><TiHomeOutline />Home</NavLink>
        
       
            <NavLink to={'/timeline'}
             className={({isActive}) =>
                `font-semibold mr-1 flex items-center gap-1 px-2 py-2 rounded-box ${isActive ? "text-white border bg-green-700" : ""}`
            }
        ><RiTimeLine />Timeline</NavLink>
        
            <NavLink to={'/stats'}
             className={({isActive}) =>
                `font-semibold mr-1 flex items-center gap-1 px-2 py-2 rounded-box ${isActive ? "text-white border bg-green-700" : ""}`
            }
            ><ImStatsDots />Stats</NavLink>
        
        
        </>
    )
  

    return (
//       <nav className='bg-base-100 shadow-sm'>
//         <div className="navbar  container mx-auto">
//   <div className="navbar-start">
    
//     <h2 className="text-xl font-bold">
//       <img src={logo} alt="logo" className="h-10" /></h2>
//   </div>
  
//   <div className="navbar-end gap-4">
//     {links}
//   </div>
// </div>
// </nav>
<div className="navbar container mx-auto">
  
  {/* LEFT: Logo + Mobile Menu */}
  <div className="navbar-start">
    
    {/* Mobile Dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        ☰
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {links}
      </ul>
    </div>

    {/* Logo */}
    <Link to="/">
      <img src={logo} alt="logo" className="h-10" />
    </Link>
  </div>

  {/* RIGHT: Desktop Menu */}
  <div className="navbar-end hidden lg:flex gap-4">
    {links}
  </div>

</div>
    );
};

export default Navbar;