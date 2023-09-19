import React from 'react'

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <span>{value}</span>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay