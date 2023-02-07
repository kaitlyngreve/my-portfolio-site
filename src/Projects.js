import Projectcard from './ProjectCard';


function Projects() {
    return (
        <div className='section-container'>
            <h4 className='header-1'>Things I've Built</h4>
            {/* featured projects */}
            <h4 className='header-5'>Featured Projects:</h4>
            <div className="featured-projects-container">
                <div className='featured-project'>
                    <p className="header-2">Notable</p>
                    <p className="featured-description">A web app built for taking and keeping notes. Notable\s neat design makes navigating and organization simple. Create and save your note entries, and revisit them, with the ability to add to or delete your notes.</p>
                    <p className="tech">JavaScript, React, CSS, Firebase</p>
                    <a href='https://github.com/kaitlyngreve/journal-app' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" height='1em' width='1em' stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href='https://journal-app-42603.web.app/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" height='1em' width='1em'>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>

                <div className='featured-project'>
                    <p className='header-2'>Recipy</p>
                    <p className='featured-description'>A digital recipe box for storing and creating recipes. Born from a love of being in the kitchen, Recipy (rec-i-pe) encourages trying new recipes of either your own creation or others.</p>
                    <p className='tech'>JavaScript, React, Ruby on Rails, CSS</p>
                    <a href='https://github.com/kaitlyngreve/digital-recipebox' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" height='1em' width='1em' stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>

                <div className='featured-project'>
                    <p className='header-2'>Taskier</p>
                    <p className='featured-description'>A single page web app for keeping a simple task list.</p>
                    <p className='tech'>JavaScript, React, CSS</p>
                    <a href='https://github.com/kaitlyngreve/taskier-a-todo-react-app' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" height='1em' width='1em' stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className='projects'>
                <h4 className='header-5'>More Projects:</h4>
                <div className='project-grid-wrapper'>
                    {projects.map((project) => {
                        return <Projectcard project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;

const projects = [
    {
        name: 'Memory Matching Game',
        description: 'A memory card matching game with two separate card sets. The game includes a timer that counts up until each match has be found. Players are able to save their score to beat later.',
        tech_stack: 'JavaScript, React, CSS',
        github_url: 'https://github.com/murphy-mi/phase-2-project',
        deployed_url: ''
    },
    {
        name: 'Car Maintenence Log',
        description: 'A log to keep tabs on the maintenence done on the users car. Built for the car enthusiast, this web app allows a user to add their car to the garage, create, update, and delete their performed maintenence.',
        tech_stack: 'JavaScript, React, Sinatra, CSS',
        github_url: 'https://github.com/HartPM/Phase-3-Project-Front-End',
        deployed_url: ''
    },
    {
        name: 'Stranger Things Game',
        description: 'A team building game where players pick four members of the Stranger Things cast and go into the Upside Down to find out whether their team can defeat the monster encounter.',
        tech_stack: 'JavaScript, React, Ruby on Rails, CSS',
        github_url: 'https://github.com/kaitlyngreve/Phase-4-Stranger-Project',
        deployed_url: ''
    }
];