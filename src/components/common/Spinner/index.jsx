import React from 'react';
import "./styles.css";

const Spinner = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center custom-spinner"
        >
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
