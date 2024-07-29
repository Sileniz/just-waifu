import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage"
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ScrollTop from "./components/ScrollTop";
import { useState } from "react";
import scrollFunction from "./utils/scrollFunction";
function App() {
  const [scroll, setScroll] = useState(false)
  window.onscroll = () => {scrollFunction({setScroll})}

return (
  <Router>
    <Header/>
    <ScrollTop disabled={scroll}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path='/favorites' element={<FavoritePage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    <Footer />        
  </Router>
  )
}

export default App