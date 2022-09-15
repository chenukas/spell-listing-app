import React from 'react';

const SpellsCount = (props) => {
    const { filteredSpellCount, totalSpellsCount } = props;
    return (
        <p className="text-center">
            Showing  <b>{filteredSpellCount}</b> of <b>{totalSpellsCount}</b> spells.
        </p>
    );
};
export default SpellsCount;