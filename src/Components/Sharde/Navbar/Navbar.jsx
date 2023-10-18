import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import "./NavBar.css"

const Navbar = () => {

    const { users, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                swal("Done!", "Successfully Logout Your Account!", "success");
            })
            .catch(error => {
                console.error(error)
            })
    }


    const navLinks = <>
        
            <NavLink to={'/'}><li><button>Home</button></li></NavLink>
            <NavLink to={'/shop'}><li><button>Products</button></li></NavLink>
            <NavLink to={'/addproduct'}><li><button>Add Product</button></li></NavLink>
            <NavLink to={'/mycart'}><li><button>My Cart</button></li></NavLink>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Ali Express BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {users ?
                    <>
                        <div className="mx-3">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {users ?
                                        <img src={users?.photoURL} /> :
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlmEDmy-tQGB8DvqvpOBQgIqWeo0s1Um2ncr15So&s" />
                                    }
                                </div>
                            </label>
                        </div>
                        <button onClick={handleLogout} className="btn">Logout</button>
                    </> :
                    <Link to={'/login'}><button className="btn">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;