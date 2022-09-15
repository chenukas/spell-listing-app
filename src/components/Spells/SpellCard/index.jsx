import React from 'react';
import "./styles.css";

const SpellCard = (props) => {
    const { index, name, url, getSpell, addToFavorites } = props;

    return (
        <div
            className="card spell-info-box shadow-sm bg-body rounded"
        >
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-10">
                        <h4>{name}</h4>
                        <p className="fw-lighter">{url}</p>
                    </div>
                    <div className="col-sm-2">
                        <i
                            className="bi bi-heart"
                            style={{
                                fontSize: "2rem",
                                color: "red",
                                cursor: "pointer",
                                paddingRight: 2,
                                paddingLeft: 2,
                            }}
                            onClick={() => addToFavorites({ index, name })}
                        />
                        <i
                            className="bi bi-arrow-right-circle"
                            style={{
                                fontSize: "2rem",
                                color: "cornflowerblue",
                                cursor: "pointer",
                                paddingRight: 2,
                                paddingLeft: 2,
                            }}
                            onClick={() => getSpell(index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpellCard;
