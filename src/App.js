import Nav from './Nav';
import SideNav from './SideNav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Contact from './Contact'

function App() {
  return (
    <div>
      <Nav />
      <SideNav />
      <div className='whole-app-container'>
        <Hero />
        <About />
        <Projects />
        <BlogPosts />
        <Contact />
      </div>
    </div>
  );
}

export default App;
