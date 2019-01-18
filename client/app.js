import React from 'react'

import {Navbar, Footer, PersistentDrawer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <PersistentDrawer />
      {/* <Navbar /> */}
      <Routes />
      <Footer />
    </div>
  )
}

export default App
