import React, {useContext} from 'react';

// Context
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({ project }) => {

    const projectContext = useContext(ProjectContext);
    const { getProject } = projectContext;

    const taskContext = useContext(TaskContext);
    const { getTasks } = taskContext;

    const handleClick = (id) => {
        getProject(id);
        getTasks(id);
    }

    return(
        <li>
            <button type="button" onClick={() => handleClick(project.id) } className="btn btn-blank">{ project.name }</button>
        </li>
    );
}

export default Project;