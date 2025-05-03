import React from 'react'
import BottomNav from '../components/Navigation/BottomNav'
import Navbar from '../components/Navigation/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${'/bg_all.png'})`,
          backgroundPosition: 'bottom left',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {children}
      </main>
      <BottomNav />
    </>
  )
}

export default Layout