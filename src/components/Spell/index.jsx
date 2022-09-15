import React from 'react';
import Spinner from "./../common/Spinner";
import "./styles.css";

const Spell = (props) => {
    const { spell, isSpellLoading } = props;
    const { name, desc, range, level } = spell || {};

    if (spell === null) {
        return (
            <div
                className="center-text spell-instruction"
            >
                <h1 className="display-6">Spell Info !</h1>
                <p>Please select a spell.</p>
                <i
                    className="bi bi-info-circle-fill"
                    style={{ fontSize: "4rem", color: "cornflowerblue" }}
                />
            </div>
        );
    }
    return (
        <div>
            {isSpellLoading && <Spinner />}
            <h1 className="display-6">Spell Info</h1>
            <div className="container mt-5" >
                <h2>
                    {name} | Level:{level} spell
                </h2>
                <h5>Description</h5>
                <p className="fw-normal justify-text">{desc}</p>
                <h5>Spell works {range.toLowerCase()} away enemy.</h5>
            </div>
        </div>
    );
};
export default Spell;
