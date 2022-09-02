import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App
