import React from 'react'
import Nav from './Nav'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="dark:bg-black overflow-x-hidden">
    <Nav />
    {children}
  </div>
)
export default Layout
