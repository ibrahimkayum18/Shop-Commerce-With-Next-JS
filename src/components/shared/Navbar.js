import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-transparent absolute md:top-9 text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-5 pr-10">
        <a className="">
          <ShoppingCartIcon />
        </a>
        <a>
          <FavoriteBorderIcon />
        </a>
        <Link href={'/add-products'}>
        <button className="">
          <AddBoxIcon />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
