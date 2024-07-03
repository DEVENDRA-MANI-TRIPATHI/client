import React from 'react'
import Header from './Header.js'

const Layout = ({children}) => {
  return (
      <div>
          <Header />
          <main>
              {children}
          </main>
    </div>
  )
}
export default Layout