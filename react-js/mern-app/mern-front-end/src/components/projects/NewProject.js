import React, {Fragment, useContext, useState} from 'react';

// Context
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {

    const tasksContext = useContext(ProjectContext);

    const { form, showForm, addProject, errorForm, showError } = tasksContext;

    const [project, setProject] = useState({
        name: '',
    });

    const { name } = project;

    const handleChange = (e) => {

        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === ''){
            showError();
            return;
        }

        addProject(project);

        setProject({
            name: '',
        });
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primario" onClick={() => showForm()}> Nuevo Proyecto</button>
            {
                form ? (
                        <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="name"
                                value={name}
                                onChange={handleChange}/>

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"/>
                        </form>
                    ) : null
            }

            { errorForm ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null }
        </Fragment>
    );
}

export default NewProject;