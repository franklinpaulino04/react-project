import React, {useContext, useEffect, useState} from 'react';

// Context
import TaskContext from "../../context/tasks/TaskContext";
import ProjectContext from "../../context/projects/ProjectContext";

const FormTask = () => {

    const [task, setTask] = useState({
        name: '',
    });

    const [error, setError] = useState(false);

    const taskContext = useContext(TaskContext);
    const {addTask, taskSelection, updateTask } = taskContext;

    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    useEffect(() => {
        if(taskSelection !== null){
            setTask(taskSelection);
        }else{
            setTask({
                name: '',
            })
        }
    },[taskSelection]);

    if(!project){
        return null;
    }

    function handleChange(e) {
        setTask({
            [e.target.name]: e.target.value,
        });
    }

    const { name } = task;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        if(taskSelection === null){
            task.state = false;
            task.projectId = project.id;

            addTask(task);

        }else{
            updateTask(task);
        }


        setTask({ name: '', });
    }

    return(
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea.."
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={taskSelection? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            { error ? <p className="mensaje error"> El nombre de la Tarea es obligatorio</p> : null }
        </div>
    );
}

export default FormTask;