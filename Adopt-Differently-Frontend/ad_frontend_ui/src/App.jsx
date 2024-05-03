// Adopt-Differently-Frontend/ad_frontend_ui/src/App.jsx
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Listings } from './components/listing/Listings'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { ListingPage } from './pages/listingpage/ListingPage'
import { Help } from './pages/help/Help'
import Login from './pages/login/Login'

const lists = <Listings />

function App() {
  return (
    <div className="App">
      
      {console.log(lists.props)}

      <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adopt" element={<Listings />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post/:id" element={<ListingPage />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  )

}
export default App
