import React, {Fragment, useContext, useEffect} from 'react';
import Task from "./Task";

// context
import TaskContext from "../../context/tasks/TaskContext";
import ProjectContext from "../../context/projects/ProjectContext";

const ListTasks = () => {

    const taskContext = useContext(TaskContext);
    const { tasksProject, removeProject } = taskContext;

    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    if(!project){
        return <h2> Selecciona un Proyecto </h2>
    }

    const { id, name } = project;

    if(tasksProject.length === 0){
        return null;
    }

    return(
        <Fragment>
            <h2>Pryecto: {name}</h2>
            <ul className="listado-tareas">
                { tasksProject.length === 0
                    ? (<li className="tare"> No hay Tareas </li>)

                    : tasksProject.map(task => (
                        <Task key={task.id}
                              task={task}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={()=> removeProject(id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListTasks;