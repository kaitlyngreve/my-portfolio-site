import Projectcard from './ProjectCard';


function Projects() {
    return (
        <div className='section-container'>
            <h4 className='header-1'>Things I've Built</h4>
            {projects.map((project) => {
                return <Projectcard project={project} />
            })}
        </div>
    )
}

export default Projects;

const projects = [
    {
        name: 'Notable',
        img: 'my-portfolio-page/src/images/notable.png',
        description: 'A web app built for taking and keeping notes. Notable\s neat design makes navigating and organization simple. Create and save your note entries, and revisit them, with the ability to add to or delete your notes.',
        tech_stack: 'React, CSS, Firebase',
        github_url: 'https://github.com/kaitlyngreve/journal-app',
        deployed_url: 'https://journal-app-42603.web.app/'
    },
    {
        name: 'Recipy',
        img: 'my-portfolio-page/src/images/recipy.jpg',
        description: 'A digital recipe box for storing and creating recipes. Born from a love of being in the kitchen, Recipy (rec-i-pe) encourages trying new recipes of either your own creation or others.',
        tech_stack: 'React, Ruby on Rails, CSS',
        github_url: 'https://github.com/kaitlyngreve/digital-recipebox',
        deployed_url: ''
    },
    {
        name: 'Taskier',
        img: '',
        description: 'A single page web app for keeping a simple task list.',
        tech_stack: 'React, CSS',
        github_url: 'https://github.com/kaitlyngreve/taskier-a-todo-react-app',
        deployed_url: ''
    }
];