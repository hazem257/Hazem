import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { useEffect, useState } from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/main/Projects';
import ProjectDetails from "./components/main/ProjectDetails";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { myprojects } from './components/main/myprojects';
import Courses from './components/courses/MyCourses';

function App() {
  const [showScroll, setshowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScroll(true);
      } else {
        setshowScroll(false);
      }
    });
  }, []);

  return (
    <Router>
      <div id='up' className='container'>
        <Routes>
          {/* صفحة الرئيسية */}
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <div className='divider' />
              <Courses />
              <div className='divider' />
              <Projects />
              <div className='divider' />
              <Contact />
              <div className='divider' />
              <Footer />
            </>
          } />

          {/* صفحة تفاصيل مشروع معين */}
      

          <Route path="/project/:id" element={
            <>
              <ProjectDetails />

              <div className='divider'></div>

              <Projects excludeId={true} />
              {/* Exclude Item OR Project You Open */}
              <div className='divider'></div>
              <Courses />
              <div className='divider' />

              <Footer />
            </>
          } />
        </Routes>

        {/*up Arrow */}
        <a style={{ opacity: showScroll ? 1 : 0, transition: "3s" }} href="#up">
          <button className='scroll2Top icon-chevron-up'></button>
        </a>
      </div>
    </Router>
  );
}

export default App;
