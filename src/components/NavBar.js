import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div className="navbar bg-blue-700">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Heck Burgers</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
           <CartWidget/>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">0 Items</span>
                <span className="text-info">Subtotal: $0</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="./Images/hamburguesa1.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Home
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Hamburguesas</a></li>
              <li><a>Papas</a></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavBar