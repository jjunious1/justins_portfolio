import './index.css'
import { useEffect } from 'react'
import { scrollToTop } from './utilities/utilities'
import { RefProvider } from './context/RefContext'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <RefProvider>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </RefProvider>
  )
}

export default App
