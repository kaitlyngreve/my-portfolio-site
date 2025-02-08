import Projectcard from './ProjectCard';
import FeaturedProjects from './FeaturedProjects';


function Projects() {
    return (
        <div className='section-container container-wide' id='projects'>
            <h4 className='header-1 container'>Things I've Built</h4>
            <FeaturedProjects />
            <div className='projects'>
                <h4 className='header-5'>More Projects:</h4>
                <div className='project-grid-wrapper'>
                    {projects.map((project) => {
                        return <Projectcard project={project} key={project.name} />
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
        tech_stack: ['JavaScript', 'React', 'CSS'],
        github_url: 'https://github.com/murphy-mi/phase-2-project',
        deployed_url: ''
    },
    {
        name: 'Car Maintenence Log',
        description: 'A log to keep tabs on the maintenence done on the users car. Built for the car enthusiast, this web app allows a user to add their car to the garage, create, update, and delete their performed maintenence.',
        tech_stack: ['JavaScript', 'React', 'Sinatra', 'CSS'],
        github_url: 'https://github.com/HartPM/Phase-3-Project-Front-End',
        deployed_url: ''
    },
    {
        name: 'Recipy',
        description: 'A digital recipe box for storing and creating recipes. Born from a love of being in the kitchen, Recipy (rec-i-pe) encourages trying new recipes of either your own creation or others.',
        tech_stack: ['JavaScript', 'React', 'Rails', 'CSS'],
        github_url: 'https://github.com/kaitlyngreve/digital-recipebox',
        deployed_url: ''
    }
];