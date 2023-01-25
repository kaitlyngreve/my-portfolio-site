import Projectcard from './ProjectCard';

const projects = [
    {
        name: 'Notable',
        description: 'For note taking'
    },
    {
        name: 'Recipy',
        description: 'Digital recipe box'
    }
];

function Projects() {
    return (
        <div>
            {projects.map((project) => {
                return <Projectcard project={project} />
            })}
        </div>
    )
}

export default Projects;