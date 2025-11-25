import Layout from "./pages/Layout";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contributors from './pages/Contributors'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Head from "./pages/Head";
import ZineArchive from "./pages/ZineArchive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/contributors" element={<Layout />}>
          <Route index element={<Contributors />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/blog" element={<Layout />}>
          <Route index element={<Blog />} />
        </Route>
        <Route path="/head">
          <Route index element={<Head />} />
        </Route>
        <Route path="/zine-archive" element={<Layout />}>
          <Route index element={<ZineArchive />} />
        </Route>
        <Route path='/admin' Component={() => {
          window.location.href = import.meta.env.VITE_ADMIN_URL;
          return null;
        }}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
