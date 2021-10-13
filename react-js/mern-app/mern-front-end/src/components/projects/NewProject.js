import React, {Fragment, useState} from 'react';

const NewProject = () => {
    
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
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-block btn-primario"> Nuevo Proyecto</button>
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
        </Fragment>
    );
}

export default NewProject;