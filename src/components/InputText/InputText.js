import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../../../src/pages/Auth/Auth.scss";
import TextErrorMsg from "../TextErrorMsg/TextErrorMsg";
import { Field, ErrorMessage } from 'formik';

export const FieldText = ({
    name,
    placeholder,
    defaultValue,
    className,
    type,
    showHide,
    disabled,
    id,
    maxLength
}) => {
    const [typeChange, setTypeChange] = useState(type);
    const handlePasswordShow = () => {
        if (typeChange === "password") {
            setTypeChange("text");
        } else {
            setTypeChange("password");
        }
    };
    return (
        <>
            <label className="custom-field one">
                <Field
                    value={defaultValue}
                    name={name}
                    type={typeChange}
                    className={className}
                    placeholder=" "
                    disabled={disabled}
                    id={id}
                    maxLength={maxLength}
                />
                <fieldset><legend><span> {placeholder} </span></legend></fieldset>
                <span className="placeholder">{placeholder}</span>
            </label>
            {showHide && (
                <span
                    className="show-hide-password"
                    type="checkbox"
                    onClick={handlePasswordShow}
                >
                    {typeChange === "password" ? (
                        <AiFillEye />
                    ) : (
                        <AiOutlineEyeInvisible />
                    )}
                </span>
            )}
            <ErrorMessage name={name} component={TextErrorMsg} />
        </>
    );
};

export const InputText = ({
    name,
    type,
    onChange,
    formErrors,
    placeholder,
    pattern,
    confirmPassword,
    disabled,
    defaultValue,
    showHide,
    className,
    id,
    placeholderInput,
    required
}) => {
    const [handleError, setHandleError] = useState();
    const [typeChange, setTypeChange] = useState(type);
    const [showHideChange, setShowHideChange] = useState(showHide);

    const FileOnChange = (e) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
        if (confirmPassword) {
            if (pattern !== value) {
                setHandleError(true);
            } else {
                setHandleError(false);
            }
        } else {
            if (!pattern.test(e.target.value)) {
                setHandleError(true);
            } else {
                setHandleError(false);
            }
        }
    };

    const HandleOnBlur = (e) => {
        if (!pattern.test(e.target.value)) {
            setHandleError(true);
        } else {
            setHandleError(false);
        }
    };

    const handlePasswordShow = () => {
        if (typeChange === "password") {
            setTypeChange("text");
        } else {
            setTypeChange("password");
        }
    };

    return (
        <>
            <label className="custom-field one">
                <input
                    defaultValue={defaultValue}
                    name={name}
                    type={typeChange}
                    onChange={FileOnChange}
                    onBlur={(e) => HandleOnBlur(e)}
                    disabled={disabled}
                    className={className}
                    // placeholder={placeholderInput}
                    placeholder=" "
                    id={id}
                    required={required}
                />
                <fieldset><legend><span> {placeholder} </span></legend></fieldset>
                <span className="placeholder">{placeholder}</span>
            </label>

            {showHideChange && (
                <span
                    className="show-hide-password"
                    type="checkbox"
                    onClick={handlePasswordShow}
                >
                    {typeChange === "password" ? (
                        <AiFillEye />
                    ) : (
                        <AiOutlineEyeInvisible />
                    )}
                </span>
            )}
            {handleError && formErrors && (
                <span className="validation-text">{formErrors}</span>
            )}
        </>
    );
};

export const SelectBox = ({
    defaultValue,
    onChange,
    options,
    formErrors,
    placeholder,
}) => {
    const [handleError, setHandleError] = useState();
    const [selectedOption, setSelectedOption] = useState(undefined);
    const [invoke, setInvoke] = useState(false);
    const FileOnChange = (obj) => {
        const { name, value } = obj;
        setSelectedOption(obj);
        onChange({ [name]: value });
        setInvoke(true);
    };
    useEffect(() => {
        if (invoke) {
            if (selectedOption === undefined) {
                setHandleError(true);
            } else {
                setHandleError(false);
            }
        }
        setInvoke(false);
    }, [selectedOption]);

    const HandleOnBlur = () => {
        if (selectedOption === undefined) {
            setHandleError(true);
        } else {
            setHandleError(false);
        }
    };
    return (
        <>
            <div className="App">
                <ReactSelect
                    value={selectedOption}
                    onChange={FileOnChange}
                    options={options}
                    onBlur={HandleOnBlur}
                    placeholder={placeholder}
                />
                {handleError && formErrors && (
                    <span className="validation-text">{formErrors}</span>
                )}
            </div>
        </>
    );
};

export const InputCheckBox = ({
    name,
    type,
    label,
    formErrors,
    onChange,
    id,
}) => {
    const [handleError, setHandleError] = useState();

    const handleCheckBox = (e) => {
        let { checked, name } = e.target;
        onChange({ [name]: checked === true ? 1 : 2 });
        if (checked === false) {
            setHandleError(true);
        } else {
            setHandleError(false);
        }
    };

    return (
        <>
            <input
                name={name}
                type={type}
                id={id}
                onChange={(e) => handleCheckBox(e)}
            ></input>
            <label htmlFor="vehicle1">{label}</label>
            {handleError && formErrors && (
                <span className="validation-text">{formErrors}</span>
            )}
        </>
    );
};

