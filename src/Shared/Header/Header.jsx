import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { isAuth } = useContext(AppContext);

  /* handle log out */
  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      toast.success("Sign Out successfully done.");
    });
  };

  return (
    <HeaderContainer className="py-6 shadow-sm">
      <div className="container mx-auto">
        <nav className="flex justify-between ">
          <Link className="logo flex items-center gap-2" to="/">
            <FaWarehouse className="text-2xl text-sky-500 " />{" "}
            <span className="text-2xl font-poppins">Akanda</span>
          </Link>
          <menu className="primary-menu flex items-center">
            <ul className={`flex items-center gap-8 ${menu ? "active" : ""}`}>
              <div
                className="close-btn absolute right-4 top-4"
                onClick={() => setMenu(false)}
              >
                <MdClose className="text-2xl" />
              </div>
              <li>
                <NavLink className="text-lg" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              {isAuth && (
                <>
                  <li>
                    <NavLink className="text-lg" to="/manage-products">
                      Manage Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-lg" to="/my-items">
                      My Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-lg" to="/add-product">
                      Add Product
                    </NavLink>
                  </li>
                  <li className="submenu relative">
                    <Link className="text-lg flex items-center gap-2" to="#">
                      More <MdOutlineKeyboardArrowDown className="text-lg" />
                    </Link>
                    <ul className="p-4 shadow rounded -left-10 top-8 w-52">
                      <li className="my-2">
                        <Link to="/management-blogs/add-blog">Add Blog</Link>
                      </li>
                      <li className="my-2">
                        <Link to="/management-blogs/manage-blog">
                          Blog Management
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              {!isAuth && (
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 bg-sky-500 px-5 py-2 rounded-sm ring-2 ring-offset-2 ring-sky-500 text-white"
                    to="/login"
                  >
                    <AiOutlineLogin /> Login
                  </Link>
                </li>
              )}
            </ul>
            <div
              className="menu-icon cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
            >
              {menu ? (
                <MdClose className="text-2xl" />
              ) : (
                <BsGrid className="text-2xl" />
              )}
            </div>
          </menu>

          {isAuth && (
            <div className="profile flex items-center">
              <div className="avatar border-4 border-slate-300 w-11 h-11 grid place-items-center text-2xl font-semibold rounded-full overflow-hidden">
                {auth?.currentUser?.photoURL ? (
                  <img
                    width={40}
                    src={auth?.currentUser?.photoURL}
                    alt="avatar"
                  />
                ) : auth?.currentUser?.displayName ? (
                  auth?.currentUser?.displayName?.slice(0, 1)
                ) : (
                  "N"
                )}
              </div>
              <div className="details flex items-center gap-2">
                <div className="mx-2 flex flex-col">
                  <span>
                    {auth?.currentUser?.displayName
                      ? auth?.currentUser?.displayName
                      : "not available"}
                  </span>
                  <small title={auth?.currentUser?.email}>
                    {auth?.currentUser?.email
                      ? auth?.currentUser?.email?.slice(0, 20) + "..."
                      : "not available"}
                  </small>
                </div>
                <button
                  onClick={handleLogOut}
                  className="flex ring-1 ring-offset-1 ring-red-400 items-center gap-2 bg-red-400 text-white px-3 py-2 font-medium rounded-sm"
                >
                  <AiOutlineLogout /> Log out
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  .close-btn {
    display: none;
  }
  position: relative;
  a.active {
    color: var(--primary-color);
  }
  .submenu {
    position: relative;

    ul {
      position: absolute !important;
      background: #fff;
      opacity: 0;
      z-index: 1;
      width: 180px;
      pointer-events: none;
      transform: translateY(15px);
      transition: all 0.5s ease;
    }
    &:hover ul {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0px);
    }
  }
  .primary-menu {
    position: relative;
    ul {
      position: relative;
    }
    .menu-icon {
      display: none;
    }
    @media (max-width: 1268px) {
      .close-btn {
        display: block;
      }
      & > ul {
        flex-direction: column;
        position: fixed;
        width: 60%;
        background-color: #ffffffd4;
        backdrop-filter: blur(5px);
        top: 0%;
        left: -100%;
        height: 100%;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        transition: all 0.5s ease;
        z-index: 6;

        &.active {
          opacity: 1;
          left: 0%;
        }
      }
      .menu-icon {
        display: block;
      }
    }
  }
  @media (max-width: 660px) {
    .profile {
      position: relative;
      .details {
        flex-direction: column;
        position: absolute;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        right: 0%;
        top: 100%;
        width: 200px;
        padding: 1rem;
        background: var(--accent-color);
        transform: translateY(10px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease;
        z-index: 65;
      }
      &:hover .details {
        pointer-events: all;
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`;
export default Header;
