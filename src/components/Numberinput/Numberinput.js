import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
const Numberinput = ({ GetValue, name, formErrors, defaultValue, disabled }) => {
    let [value, setValue] = useState(defaultValue);
    const [handleError, setHandleError] = useState();
    const onChange = (data) => {
        setValue(data);
        GetValue({ [name]: data });
        if (value === undefined) {
            setHandleError(true);
        } else {
            setHandleError(false);
        }
    };

    const HandleOnBlur = () => {
        if (value === undefined) {
            setHandleError(true);
        } else {
            setHandleError(false);
        }
    };
    return (
        <div className="phone-input-flag">
            <PhoneInput
                placeholder="Phone number"
                international
                defaultCountry="IN"
                value={defaultValue}
                onChange={onChange}
                onBlur={HandleOnBlur}
                disabled={disabled}
                countryCallingCodeEditable={false}
            />
            {handleError && <span className="validation-text">{formErrors}</span>}
        </div>
    );
};

export default Numberinput;
