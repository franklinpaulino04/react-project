import React, {useContext} from 'react';
import TaskContext from "../../context/tasks/TaskContext";

const Task = ({ task }) => {

    const { id, name, state, projectId } = task;

    const taskContext = useContext(TaskContext);
    const { removeTask, selectTask, changeTask, getTaskActual } = taskContext;

    const handleStatusClick = (task) => {

        task.state = !task.state;
        changeTask(task);
    }

    const handleSelectClick = (task) => {
        getTaskActual(task);
    }

    const handleRemoveClick = (id) => {
        removeTask(id);
    }

    return(
        <li className="tarea sombra">
            <p>{ name }</p>

            <div className="estado">
                {
                    task.state ?
                        (
                            <button type="button"
                                    className="completo"
                            onClick={() => handleStatusClick(task)}
                            >Completo</button>
                        )
                        :
                        (
                            <button type="button"
                                    className="incompleto"
                                    onClick={() => handleStatusClick(task)}
                            >Incompleto</button>
                        )
                }
            </div>
            <div className="acciones">
                <button type="button"
                        className="btn btn-primario"
                        onClick={() => handleSelectClick(task)}
                >Editar</button>

                <button type="button"
                        className="btn btn-primario"
                        onClick={() => handleRemoveClick(id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Task;