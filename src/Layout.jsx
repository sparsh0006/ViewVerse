import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Github from './components/github/github'
import User from './components/user/User'


function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout