import React, {useContext} from 'react';
import ProjectContext from "../../context/projects/ProjectContext";

const FormTask = () => {

    const taskContext = useContext(ProjectContext);
    const { project } = taskContext;

    if(!project){
        return null;
    }

    return(
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea.."
                        name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTask;