import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import pages and components
import Home from './pages/Home'
import Test from './pages/Test'
import Review from './pages/Review'
import About from './pages/About'
import EnglishTest from './pages/EnglishTest'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow bg-primary">
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
              <Route 
                path='/test'
                element={<Test />}
              />
              <Route 
                path='/review'
                element={<Review />}
              />
              <Route 
                path='/about'
                element={<About />}
              />
              <Route
                path='/english-test'
                element={<EnglishTest />}
              />
            </Routes>

          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App
