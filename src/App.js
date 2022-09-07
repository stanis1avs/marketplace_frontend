import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import ContactsPage from './pages/ContactsPage'
import CatalogIdPage from './pages/CatalogIdPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import CatalogPage from './pages/CatalogPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/contacts" element={<ContactsPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/catalog/:id" element={<CatalogIdPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
