import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar bg-blue-700">
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Heck Burgers</Link>
      </div>
      <div className="flex-none">
        <CartWidget />

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/Images/hamburguesa1.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={'/'} className="justify-between">
                Home
              </Link>
            </li>
            <li><Link to={'/categoria/hamburguesas'}>Hamburguesas</Link></li>
            <li><Link to={'/categoria/papas'}>Papas</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar