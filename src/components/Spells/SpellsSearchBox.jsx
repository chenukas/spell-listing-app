import React from 'react';

const SpellsSearchBox = (props) => {
    const {
        spellsCount,
        isSpellsLoading,
        searchPhrase,
        setSearchPhrase,
        handleReset,
    } = props;
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control form-control-md"
                value={searchPhrase}
                onChange={(e) => setSearchPhrase(e.target.value)}
                placeholder={
                    isSpellsLoading ? "Hold on getting spells ..." : "Search here 'Arcanist's Magic Aura'"
                }
                autoComplete="off"
                disabled={spellsCount === 0 ? true : false}
            />
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleReset()}
                disabled={spellsCount === 0 ? true : false}
            >
                Reset
            </button>
        </div>
    );
};
export default SpellsSearchBox;
