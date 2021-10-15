import React, {Fragment, useContext, useEffect} from 'react';
import Task from "./Task";

// context
import TaskContext from "../../context/TaskContext";

const ListTasks = () => {

    const taskContext = useContext(TaskContext);
    const { tasks, getTasks } = taskContext;

    useEffect(() => {
        getTasks();
    },[]);

    if(tasks.length === 0) return null;

    return(
        <Fragment>
            <h2>Pryecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                { tasks.length === 0
                    ? (<li className="tare"> No hay Tareas </li>)

                    : tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))

                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListTasks;