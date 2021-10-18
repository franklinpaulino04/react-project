import React, {useContext, useEffect} from 'react';

// Components
import Project from "./Project";

// Context
import ProjectContext from "../../context/projects/ProjectContext";

const ListProjects = () => {

    const taskContext = useContext(ProjectContext);
    const { projects, getProjects } = taskContext;

    useEffect(() => {
        getProjects();
    },[]);

    if(projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

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