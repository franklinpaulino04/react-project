import React, {useContext, useEffect} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <TransitionGroup>
                {
                    projects.map(project => (
                        <CSSTransition
                            key={project.id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Project project={project}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;