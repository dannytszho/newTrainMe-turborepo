import React from 'react'
import Nav from './Nav'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="dark:bg-black">
    <Nav />
    {children}
  </div>
)
export default Layout
