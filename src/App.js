import './App.css';
import Header from './Header';
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Nav from './Nav';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <BlogPosts />
      <Contact />
    </div>
  );
}

export default App;
