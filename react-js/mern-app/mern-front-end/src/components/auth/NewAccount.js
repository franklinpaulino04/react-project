import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NewAccount = () => {

    const [registre, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        password_confirm: '',
    });

    const handleChange = (e) => {
        setRegister({
            ...registre,
            [e.target.name]:e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input type="text"
                               id="name"
                               name="name"
                               placeholder="Tu Nombre"
                               onChange={handleChange}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="Tu Email"
                               onChange={handleChange}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="Tu Password"
                               onChange={handleChange}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password_confirm">Confirmar Password</label>
                        <input type="password"
                               id="password_confirm"
                               name="password_confirm"
                               placeholder="Tu Confirmar Password"
                               onChange={handleChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;