import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="Tu Email"
                               onChange={handleChange}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="Tu Password"
                               onChange={handleChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta"> Obtener Cuenta</Link>
            </div>
        </div>
    );
}

export default Login;