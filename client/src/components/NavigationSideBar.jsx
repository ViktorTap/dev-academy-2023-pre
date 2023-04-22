import React from 'react'
import { Outlet, Link } from "react-router-dom";

import '../style/NavigationSideBar.css'

function NavigationSideBar() {
  return (
    <main className='navigation-side-bar--main-container'>
    <section className='navigation-side-bar--navigation-panel'>
          <h1>NAVIGATION</h1>
        <h2 className='navigation-side-bar--link'>
          <Link to="/" id='link'>JOURNEYS</Link>
        </h2>
        <h2 className='navigation-side-bar--link'>
          <Link to="/stations" id='link'>STATIONS</Link>
        </h2>
       
        </section>
        <section className='navigation-side-bar--content-view'>
        <Outlet />
        </section>
        </main>
              
              
        
       
  )
}

export default NavigationSideBar;