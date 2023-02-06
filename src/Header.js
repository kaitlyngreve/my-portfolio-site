import { useState, useRef, useEffect } from 'react';

const subheaders = [
    'I am a Software Engineer.',
    'I build things for the web.'
]

function Header() {
    const [subheaderIndex, setSubheaderIndex] = useState(0);
    const intervalId = useRef();

    const changeSubheader = () => {
        let nextSubheaderIndex = subheaderIndex + 1

        if (nextSubheaderIndex === subheaders.length - 1) {
            clearInterval(intervalId.current);
            // nextSubheaderIndex = 0;
        }
        if (!subheaders[nextSubheaderIndex]) {
            nextSubheaderIndex = 0;
        }
        setSubheaderIndex(nextSubheaderIndex);
    };

    useEffect(() => {
        intervalId.current = setInterval(changeSubheader, 2500);
        return () => clearInterval(intervalId.current);
    }, [changeSubheader]);

    return (
        <div className='hero-content'>
            <p className="hero-hello">Hello! My name is</p>
            <h1 className="hero-name">Kaitlyn Greve.</h1>
            <h4 className="hero-intro">{subheaders[subheaderIndex]}</h4>
            <a className='CTA-button' href='#about'>Learn more about me</a>
        </div>
    )
}

export default Header;