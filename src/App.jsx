import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import HomePage from './pages/HomePage.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <HomePage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
