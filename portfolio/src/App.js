import './index.css'
import { useEffect } from 'react'
import { scrollToTop } from './utilities/utilities'
import { RefProvider } from './context/RefContext'

function App() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <RefProvider>
      <div>
        <h1>This is working!</h1>
      </div>
    </RefProvider>
  )
}

export default App
