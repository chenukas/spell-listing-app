import React from 'react';
import "./styles.css";

const Favorites = (props) => {
    const { favorites, removeFromFavorites } = props;

    if (favorites.length === 0) {
        return (
            <div
                className="center-text no-fav-spells-box"
            >
                <h1 className="display-6">Favourites !</h1>
                <p>Please add spells to favorites.</p>
                <i
                    className="bi bi-heart-fill"
                    style={{ fontSize: "4rem", color: "#c91414" }}
                />
            </div>
        );
    }
    return (
        <div>
            <h1 className="display-6">Favourite Spells</h1>
            <div
                className="container mt-5 fav-spells-container"
            >
                {favorites.map((favorite) => {
                    return (
                        <div
                            key={favorite.index}
                            className="card shadow-sm mb-1"
                        >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-10"><h4>{favorite.name}</h4></div>
                                    <div className="col-sm-2">
                                        <i
                                            className="bi bi-trash3"
                                            style={{
                                                fontSize: "2rem",
                                                color: "red",
                                                cursor: "pointer",
                                            }}
                                            role="button"
                                            onClick={() => {
                                                removeFromFavorites(favorite.index);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Favorites;