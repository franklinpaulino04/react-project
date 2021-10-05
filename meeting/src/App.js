import React, {Fragment, useEffect, useState} from 'react';

// Components
import Form from "./components/Form";
import Meeting from "./components/Meeting";
import Footer from "./components/Footer";

function App() {

    let meetingsInitial = JSON.parse(localStorage.getItem('meetings'));

    if(!meetingsInitial) {
        meetingsInitial = [];
    }

    const [meetings, setMeetings] = useState(meetingsInitial);

    // use Effect  para realizar ciertas operaciones cuando el state cambia.
    useEffect(() => {

        if(meetingsInitial){
            localStorage.setItem('meetings', JSON.stringify(meetings));
        }else{
            localStorage.setItem('meetings', JSON.stringify([]));
        }

    },[meetings, meetingsInitial]);

    const createMeting = (meeting) => {
        setMeetings([
            ...meetings,
            meeting
        ]);
    }

    const deleteMeting = (id) => {
        const dataMeting = meetings.filter((meeting) => meeting.id !== id);

        setMeetings(dataMeting);
    }

    const title = meetings.length === 0 ? ' No hay citas' : 'Administra tu Citas';

    const date = new Date().getFullYear();

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                        createMeting={createMeting}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{ title }</h2>
                        {
                            meetings.map((meeting) => (
                                <Meeting
                                key={ meeting.id }
                                deleteMeting={ deleteMeting }
                                meeting={ meeting }/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer date={date}/>
        </Fragment>
    );
}

export default App;
