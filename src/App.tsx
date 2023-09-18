//Import routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import pages
import NavBar from './PrimaryComponents/NavBar.tsx';
import './Stylesheets/App.css';
import HomeContent from './bodyContent.tsx';
import Contact from './pages/Contact.tsx';
import Learn from './pages/Lessons/Learn.tsx';
import * as Lessons from './pages/Lessons/Lessons.tsx';
import NoPage from './pages/NoPage.tsx';
import SocialLogin from './pages/SocialLogin.tsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<NavBar />} >
        <Route index element = {<HomeContent />} />
        <Route path="learn" element={<Learn />}>
          <Route path="lesson1" element={<Lessons.Lesson1 />} />
          <Route path="lesson2" element={<Lessons.Lesson2 />} />
          <Route path="lesson3" element={<Lessons.Lesson3 />} />
          <Route path="lesson4" element={<Lessons.Lesson4 />} />
          <Route path="lesson5" element={<Lessons.Lesson5 />} />
          <Route path="lesson6" element={<Lessons.Lesson6 />} />
          <Route path="lesson7" element={<Lessons.Lesson7 />} />
          <Route path="lesson8" element={<Lessons.Lesson8 />} />
          <Route path="lesson9" element={<Lessons.Lesson9 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={ <SocialLogin />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
