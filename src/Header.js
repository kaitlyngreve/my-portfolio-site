import About from './About';

function Header() {
    return (
        <div>
            <div id='main'></div>
            <h4>Hello! My name is</h4>
            <h1>Kaitlyn Greve.</h1>
            <h4>I build things for the web.</h4>
            <a href='#about'>Learn more about me</a>
            <About />
        </div>
    )
}

export default Header;