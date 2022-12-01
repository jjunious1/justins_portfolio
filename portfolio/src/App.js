import './index.css'
import { useEffect } from 'react'
import { scrollToTop } from './utilities/utilities'
import { RefProvider } from './context/RefContext'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <RefProvider>
      <Header />
      <Nav />
      <h1>This is working!</h1>
    </RefProvider>
  )
}

export default App
