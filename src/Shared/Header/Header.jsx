import React, { useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderContainer className="py-6 shadow-sm">
      <div className="container mx-auto">
        <nav className="flex justify-between ">
          <Link className="logo flex items-center gap-2" to="/">
            <FaWarehouse className="text-2xl text-green-400 " />{" "}
            <span className="text-2xl font-poppins">Akanda</span>
          </Link>
          <menu className="primary-menu flex items-center">
            <ul className={`flex items-center gap-8 ${menu ? "active" : ""}`}>
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
                <Link
                  className="text-lg flex items-center gap-2 bg-green-500 px-5 py-2 rounded-sm ring-2 ring-offset-2 ring-green-500 text-white"
                  to="/login"
                >
                  <AiOutlineLogin /> Login
                </Link>
              </li>
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
          <div className="profile flex items-center">
            <div className="avatar border-4 border-slate-300 rounded-full overflow-hidden">
              <img
                width={40}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
                alt="avatar"
              />
            </div>
            <div className="details flex items-center gap-2">
              <div className="mx-2 flex flex-col">
                <span>Ashik Mahmud</span>
                <small>ashik@gmail.com</small>
              </div>
              <button className="flex ring-1 ring-offset-1 ring-red-400 items-center gap-2 bg-red-400 text-white px-3 py-2 font-medium rounded-sm">
                <AiOutlineLogout /> Log out
              </button>
            </div>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  a.active {
    color: var(--primary-color);
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
      ul {
        flex-direction: column;
        position: absolute;
        width: 300px;
        background-color: #fff;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
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
          pointer-events: all;
          transform: translateX(-50%) translateY(10px);
        }
      }
      .menu-icon {
        display: block;
      }
    }
  }
  @media (max-width: 460px) {
    .primary-menu {
      position: relative;
      ul {
        width: 240px;
      }
    }
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
