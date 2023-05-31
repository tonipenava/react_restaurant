import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarPage from './components/NavbarPage';
import About from './pages/About';
import Find from './pages/Find';

import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarPage />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/find" element={<Find />} />
          <Route exact path="/book-table" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
