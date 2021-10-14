import React, {Fragment} from 'react';
import Task from "./Task";

const ListTasks = () => {

    const projectTasks = [
        {name: 'Elegir Plataforma', state: true },
        {name: 'Elegir Colores', state: false },
        {name: 'Elegir Plataformas de pago', state: false },
        {name: 'Elegir Hosting', state: true },
    ];

    return(
        <Fragment>
            <h2>Pryecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                { projectTasks.length === 0
                    ? (<li className="tare"> No hay Tareas </li>)

                    : projectTasks.map(task => (
                        <Task key={task.name} task={task} />
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