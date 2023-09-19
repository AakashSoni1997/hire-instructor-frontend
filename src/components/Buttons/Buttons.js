import { Link } from 'react-router-dom'
import './Buttons.scss';
// import LoaderSpinner from './../Loader/LoaderSpinner';

const Button = (props) => {
    return (
        <button
            type={props.BtnType}
            className={`btn btn-${props.BtnColor}`}
            onClick={props.onClick}
            disabled={props.disabled}
            title={props.title}
            name={props.name}
        >
            {/* {props.withIcon} */}
            {props.BtnText}
            {props.hasSpinner && <>&nbsp;<span className="spinner-border d-inline-block" /></>}
        </button>
    );
}

export default Button;