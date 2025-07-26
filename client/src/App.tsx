import Layout from "./pages/Layout";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
