import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Nav from './Nav';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Nav />
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
