

function About() {
    return (
        <div className="section-container">
            <div id="about"></div>
            <div className="about-me">
                <h1 className="header-1">About me</h1>
                <p className="about-content">Hello! My name is Kaitlyn and I am a full stack software engineer based in the Bay Area, California.</p>
                <p className="about-content">I graduated from and intensive full stack software engineering bootcamp, but before
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
                <div className="about-tech-container">
                    <p className="about-tech-header">Here are a few technologies I have been working with:</p>
                    <div className='about-tech'>
                        <p className="tech">JavaScript</p>
                        <p className="tech">React</p>
                        <p className="tech">Firebase</p>
                        <p className="tech">Ruby</p>
                        <p className="tech">Ruby on Rails</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;