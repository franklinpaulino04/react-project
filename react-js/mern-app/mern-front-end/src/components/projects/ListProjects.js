import React, {useContext, useEffect} from 'react';
import Project from "./Project";
import TaskContext from "../../context/TaskContext";

const ListProjects = () => {

    const taskContext = useContext(TaskContext);
    const { projects, getProjects } = taskContext;

    useEffect(() => {
        getProjects();
    },[]);

    if(projects.length === 0) return null;

    return(
        <ul className="listado-proyectos">
            {
                projects.map(project => (
                    <Project key={project.id} project={project}/>

                ))
            }
        </ul>
    );
}

export default ListProjects;