import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ createMeting }) => {

    const [meeting, setMeeting] = useState({
        mascot: '',
        owner: '',
        date: '',
        time: '',
        symptom: '',
    });

    const [error, setError] = useState(false);

    const handleState = (e) => {
        setMeeting({
            ...meeting,
            [e.target.name] : e.target.value
        });
    }

    const { mascot, owner, date, time, symptom } = meeting;

    const submitMeeting = (e) => {
        e.preventDefault();

        if(mascot.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        meeting.id = uuid();
        createMeting(meeting);

        setMeeting({
            mascot: '',
            owner: '',
            date: '',
            time: '',
            symptom: '',
        });
    }

    return (
        <Fragment>
            <h2>Crear Citas</h2>

            { error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : '' }

            <form onSubmit={submitMeeting}>
                <label>Nombre mascota</label>
                <input type="text"
                       name="mascot"
                       className="u-full-width"
                       placeholder="Nombre mascota"
                onChange={handleState}
                value={mascot}/>

                <label>Nombre Dueño</label>
                <input type="text"
                       name="owner"
                       className="u-full-width"
                       placeholder="Nombre dueño de la mascota"
                       onChange={handleState}
                value={owner}/>

                <label>Fecha</label>
                <input type="date"
                       name="date"
                       className="u-full-width"
                       onChange={handleState}
                value={date}/>

                <label>Hora</label>
                <input type="time"
                       name="time"
                       className="u-full-width"
                       onChange={handleState}
                value={time}/>

                <label>Síntomas</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    onChange={handleState}
                value={symptom}>

                </textarea>

                <button type="submit" className="u-full-width button-primary"> Agregar Cita</button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createMeting : PropTypes.func.isRequired
}

export default Form;