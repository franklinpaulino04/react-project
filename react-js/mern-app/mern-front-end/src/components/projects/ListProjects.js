import React from 'react';
import Project from "./Project";

const ListProjects = () => {

    const projects = [
        {name: 'Tienda Virtual'},
        {name: 'Intranet'},
        {name: 'Diseño de Sitio web'},
    ]

    return(
        <ul className="listado-proyectos">
            {
                projects.map(project => (
                    <Project key={project.name} project={project}/>

                ))
            }
        </ul>
    );
}

export default ListProjects;