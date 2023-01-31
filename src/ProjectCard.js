import useCollapse from "react-collapsed";
import { useState } from 'react';

function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    const handleCollapse = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            <div id='projects'></div>
            <div className='collapsible-div' {...getToggleProps({ onClick: handleCollapse })}>
                {isExpanded ? project.name : project.name}
            </div>
            <div className='collapsible-div' {...getCollapseProps()}>
                <p>{project.description}</p>
                <p>{project.tech_stack}</p>
            </div>
        </div>

    )
}

export default ProjectCard;