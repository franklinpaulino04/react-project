import React from 'react';

const Form = () => {
    return (
        <form>
            <div className="input-field col s12">
                <input type="text" name="city" id="city"/>
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country">
                    <option value=""> -- Seleccione un país -- </option>
                </select>
                <label htmlFor="city">País: </label>
            </div>
        </form>
    )
}

export default Form;