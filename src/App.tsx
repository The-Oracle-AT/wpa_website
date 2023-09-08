//Import routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import pages
import NavBar from './NavBar.tsx';
import './Stylesheets/App.css';
import HomeContent from './bodyContent.tsx';
import SimpleForm from './contactForm.tsx';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from './pages/NoPage.tsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<HomeContent/>} />
        <Route path="/contact" element={<SimpleForm/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NoPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
