import React, {useState} from 'react';
import PropTypes from 'prop-types';

const useSelect = ({ stateInitial, options }) => {

    const [notice, setNotice ] = useState(stateInitial);

    const NoticeSelect = () => (
        <select className="browser-default" onChange={e => setNotice(e.target.value)} value={notice}>
            <option value=""> -- Seleccione una opción -- </option>
            {
                options.map(e => (
                    <option key={e.value} value={e.value}>{e.label}</option>
                ))
            }
        </select>
    )

    return [notice, NoticeSelect];
}

useSelect.propTypes = {
    stateInitial: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default useSelect;