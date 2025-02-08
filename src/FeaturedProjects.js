

function FeaturedProjects() {
    return (
        <div>
            <div className="featured-projects-container container">
                <div className='featured-project'>
                    <div className='featured-project-content'>
                        <a className='link-header' href='https://www.rangerbudget.com/' target='_blank' rel="noreferrer">Ranger</a>
                        <p className='featured-description'>Built with React, TypeScript, and a lot of love. Ranger is a personal finance tool that I build with my husband. It's designed to be approachable, friendly, and non-judgemental while still providing the real-world data necessary to make healthy financial decisions.</p>
                        <div className='tech-items-wrapper'>
                            <p className="tech">TypeScript</p>
                            <p className="tech">React</p>
                            <p className="tech">Remix</p>
                            <p className="tech">Tailwind</p>
                        </div>
                    </div>
                    <div className="featured-project-image-container">
                        <div className="featured-project-image" style={{ backgroundImage: 'url(./images/ranger.jpg)' }}></div>
                    </div>
                </div>

                <div className='featured-project'>
                    <div className='featured-project-content'>
                        <a className="link-header" href='https://journal-app-42603.web.app/' target='_blank' rel="noreferrer">Notable</a>
                        <p className="featured-description">A web app built for taking and keeping notes. Notable's neat design makes navigating and organization simple. Create and save your note entries, and revisit them, with the ability to add to or delete your notes.</p>
                        <div className="tech-items-wrapper">
                            <p className="tech">JavaScript</p>
                            <p className="tech">React</p>
                            <p className="tech">CSS</p>
                            <p className="tech">Firebase</p>
                        </div>
                        <a className="inline-cta" href='https://github.com/kaitlyngreve/journal-app' target="_blank" rel="noreferrer">
                            View on Github
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" height='1em' width='1em' strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                    <div className="featured-project-image-container">
                        <div className="featured-project-image" style={{ backgroundImage: 'url(./images/notable.png)' }}></div>
                    </div>
                </div>

                <div className='featured-project'>
                    <div className='featured-project-content'>
                        <a className='link-header' href='https://kaitlyngreve.github.io/taskier-a-todo-react-app/' target='_blank' rel="noreferrer">Taskier</a>
                        <p className='featured-description'>A single page web app for keeping a simple task list. List items can be created, edited, and deleted.</p>
                        <div className="tech-items-wrapper">
                            <p className='tech'>JavaScript</p>
                            <p className='tech'>React</p>
                            <p className='tech'>CSS</p>
                        </div>
                        <a className="inline-cta" href='https://github.com/kaitlyngreve/taskier-a-todo-react-app' target="_blank" rel="noreferrer">
                            View on Github
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" height='1em' width='1em' strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                    <div className="featured-project-image-container">
                        <div className="featured-project-image" style={{ backgroundImage: 'url(./images/taskier.png)' }}></div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default FeaturedProjects;