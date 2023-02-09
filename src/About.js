

function About() {
    return (
        <div className="section-container container" id='about'>
            <div className="about-content">
                <h1 className="header-1">About me</h1>
                <p>I am a full stack software engineer based in the beautiful <a className="link" href="https://www.visitcalifornia.com/region/san-francisco-bay-area/" target='_blank' rel="noreferrer">Bay Area</a> of California.</p>
                <p>
                    In the last year, I graduated from an intensive full stack software engineering bootcamp where I learned to build effective, real world applications using React and Ruby.
                </p>
                <p>
                    Before launching myself into the software industry, I worked as a hairstylist. While the two careers are profoundly different, I have found a shared purpose  of creating and delivering results to people. Software just allows me to do so in a more engaging way, and at a much larger scale. I am eager to use my skills to build and contribute toward software that empowers organizations and individuals alike.
                </p>
                <p className="inline-text-callout">
                    Are you hiring? I'd love to work with you! <a href="#contact">Contact Me.</a>
                </p>
            </div>
            <div className="tech-whole-container red-border-accent">
                <p className="header-4">Tech I Work With:</p>
                <div className="tech-container">
                    <p className="tech tech-comma">JavaScript</p>
                    <p className="tech tech-comma">React</p>
                    <p className="tech tech-comma">Firebase</p>
                    <p className="tech tech-comma">Ruby</p>
                    <p className="tech tech-comma">Rails</p>
                    <p className="tech">HTML / CSS</p>
                </div>
            </div>
        </div >
    )
}

export default About;