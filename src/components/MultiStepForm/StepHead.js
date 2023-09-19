import "./../../pages/Instructorcompleteprofile/CompleteProfile.scss"
const StepHead = ({data, activeStep}) => {
    return (
        <div className="complete-profile-step">
            <ul className="step-progressbar-ul">
                {data?.map((value, idx) =>
                    <li key={value.key} className={`sp-item ${value.key} ${idx <= data.findIndex(f => f.key === activeStep) ? 'active' : ""} ${idx < data.findIndex(f => f.key === activeStep) ? 'saved' : ""}`}>
                        <span className="sp-count"> {idx + 1} </span>
                        <h5 className="sp-title"> {value.label}</h5>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default StepHead;