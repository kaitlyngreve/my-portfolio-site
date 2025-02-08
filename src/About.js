function About() {
    return (
        <div className="section-container container" id='about'>
            <div className="about-header-container">
                <div className="about-image-container">
                    <div 
                        style={{ backgroundImage: 'url(./images/profile_photo_kaitie.jpeg)' }} 
                        className="about-image" 
                    />
                </div>
                <h1 className="header-1">About me</h1>
            </div>
            <div className="about-content">
                <p>I'm a full-stack software engineer based in the beautiful <a className="link" href="https://www.visitcalifornia.com/region/san-francisco-bay-area/" target='_blank' rel="noreferrer">Bay Area</a> of California.</p>
                <p>
                Since graduating from a full-stack bootcamp, I've been collaborating with my husband to build <a className="link" href="https://www.rangerbudget.com/" target='_blank' rel="noreferrer">Ranger</a>, a personal finance tool. Along the way, I've sharpened my skills in React, Remix, Node.js, and design—focusing on crafting intuitive interfaces and seamless user experiences.</p>
                <p>
                Before software, I worked as a hairstylist—two careers that might seem worlds apart, but both are about problem-solving, creativity, and delivering results people love. Now, I get to do that through code.
                </p>
                <p className="inline-text-callout">
                    Are you hiring? I'd love to work with you! <a href="#contact">Contact Me.</a>
                </p>
            </div>
            <div className="tech-whole-container red-border-accent">
                <p className="header-4">Tech I Work With:</p>
                <div className="tech-container">
                    <p className="tech tech-comma">TypeScript</p>
                    <p className="tech tech-comma">React</p>
                    <p className="tech tech-comma">Remix</p>
                    <p className="tech tech-comma">Tailwind</p>
                    <p className="tech tech-comma">Node.js</p>
                    <p className="tech tech-comma">Ruby</p>
                    <p className="tech tech-comma">Rails</p>
                    <p className="tech">HTML / CSS</p>
                </div>
            </div>
        </div >
    )
}

export default About;