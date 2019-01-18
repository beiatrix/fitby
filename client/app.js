import React from 'react'

import {Footer, PersistentDrawer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <PersistentDrawer />
      {/* <Routes /> */}
      <Footer />
    </div>
  )
}

export default App
