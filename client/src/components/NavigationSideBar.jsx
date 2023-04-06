import React from 'react'
import { Outlet, Link } from "react-router-dom";

import '../style/NavigationSideBar.css'


function NavigationSideBar() {
  return (
    <main className='main--container'>
    <section className='navigation--panel'>
        <h1>SideBarNav</h1>
        <h3>
          <Link to="/">MainView</Link>
        </h3>
        <h3>
          <Link to="/second">SecondView</Link>
        </h3>
       
        </section>
        <section className='content--view'>
        <Outlet />
        </section>
        </main>
              
              
        
       
  )
}

export default NavigationSideBar;