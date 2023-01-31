import About from './About';

function Header() {
    return (
        <div>
            <h4>Hello! My name is</h4>
            <h1>Kaitlyn Greve.</h1>
            <h4>I build things for the web.</h4>
            <button>Learn more about me</button>
            <About />
        </div>
    )
}

export default Header;