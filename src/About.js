

function About() {
    return (
        <div className="section-container">
            <div id="about"></div>
            <h1 className="header-1">About me</h1>
            <p className="about-content">Hello! My name is Kaitlyn and I am a full stack software engineer based in the <a className="location-link" href="https://www.visitcalifornia.com/region/san-francisco-bay-area/" target='_blank'>Bay Area, California</a>.</p>
            <p className="about-content">I graduated from an intensive full stack software engineering bootcamp, but before
                that I worked as a hairstylist in the cosmetology industry. I've loved that I can
                apply my passion for creating and delivering meaningful results to people from cosmetology
                to coding. Part of what drew me to tech was wanting to make a bigger impact - whether it be through
                improving workflows and collaboration, bettering how tools and platforms work together,
                or data security. I admire how software is so widely used and provides ample opportunity
                to reach and impact groups of people.
            </p>
            <p className="about-content">As a software engineer I can apply my excitment for continued learning, teamwork, and innovation
                on a team that is equally excited for these things. I am eager to use my skills to build
                and contribute toward software that empowers people and organizations.
            </p>
            <div className="tech-whole-container">
                <p className="header-4">What I've been working with:</p>
                <div className="tech-container">
                    <p className="tech tech-comma">JavaScript</p>
                    <p className="tech tech-comma">React</p>
                    <p className="tech tech-comma">Firebase</p>
                    <p className="tech tech-comma">Ruby</p>
                    <p className="tech tech-comma">Ruby on Rails</p>
                    <p className="tech">HTML / CSS</p>
                </div>
            </div>
        </div>
    )
}

export default About;