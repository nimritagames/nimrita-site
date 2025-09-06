import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { HomePage } from './pages/HomePage'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

const AppContent = () => {
  useScrollAnimation()

  return (
    <>
      <div className="noise" aria-hidden="true"></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <noscript>
        <p style={{textAlign:'center', color:'#9aa0a6', padding:'8px 16px'}}>
          This site looks better with JavaScript enabled.
        </p>
      </noscript>
    </>
  )
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  )
}

export default App