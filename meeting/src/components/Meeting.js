import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({ meeting, deleteMeting }) => {

    return (
        <div className="cita">
            <p>Mascota: <span>{ meeting.mascot }</span></p>
            <p>Dueño: <span>{ meeting.owner }</span></p>
            <p>Fecha: <span>{ meeting.date }</span></p>
            <p>Hora: <span>{ meeting.time }</span></p>
            <p>Síntomas: <span>{ meeting.symptom }</span></p>
            <button className="button eliminar u-full-width" onClick={() => deleteMeting(meeting.id)}>Eliminar &times;</button>
        </div>
    );
}


Meeting.propTypes = {
    meeting : PropTypes.object.isRequired,
    deleteMeting : PropTypes.func.isRequired,
}

export default Meeting;