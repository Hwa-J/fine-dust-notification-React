import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import store from './modules'
import AllRegions from './pages/AllRegions'
import Bookmarks from './pages/Bookmarks'
import Myregion from './pages/Myregion'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Myregion />} />
          <Route path="/allRegions" element={<AllRegions />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </Provider>
  )
}

export default App
