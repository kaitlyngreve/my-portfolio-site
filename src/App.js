import './App.css';
import Nav from './Nav';
import SideNav from './SideNav';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav />
      <div className='whole-app-container'>
        <Header />
        <About />
        <Projects />
        <BlogPosts />
        <Contact />
      </div>
    </div>
  );
}

export default App;
