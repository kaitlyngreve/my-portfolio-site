import { useState, useRef, useEffect } from 'react';

const subheaders = [
    'I am a Software Engineer.',
    'I build things for the web.',
    'I am a problem solver.'
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
            return
        }
        setSubheaderIndex(nextSubheaderIndex);
    };

    useEffect(() => {
        intervalId.current = setInterval(changeSubheader, 3000);
        return () => clearInterval(intervalId.current);
    }, [changeSubheader]);

    return (
        <div className='header-content'>
            <div id='main'></div>
            <p className="header-hello">Hello! My name is</p>
            <h1 className="header-name">Kaitlyn Greve.</h1>
            <h4 className="header-intro">{subheaders[subheaderIndex]}</h4>
            <a className='CTA-button' href='#about'>Learn more about me</a>
        </div>
    )
}

export default Header;