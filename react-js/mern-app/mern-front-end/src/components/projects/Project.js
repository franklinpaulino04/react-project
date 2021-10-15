import React, {useContext} from 'react';
import TaskContext from "../../context/TaskContext";

const Project = ({ project }) => {

    const taskContext = useContext(TaskContext);
    const { getProject } = taskContext;

    return(
        <li>
            <button type="button" onClick={() => getProject(project.id)} className="btn btn-blank">{ project.name }</button>
        </li>
    );
}

export default Project;