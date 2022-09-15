import React from 'react';
import { useEffect, useState } from "react";
import Spinner from "./../common/Spinner";
import SpellsSearchBox from "./SpellsSearchBox";
import SpellsCount from "./SpellsCount";
import SpellCard from './SpellCard';
import "./styles.css";

const Spells = (props) => {
    const {
        isSpellsLoading,
        spells,
        spellsActions
    } = props;

    const [searchPhrase, setSearchPhrase] = useState("");
    const [spellsToDisplay, setSpellsToDisplay] = useState(spells);

    /* 
    Load spells to be displayed
    */
    useEffect(() => {
        setSpellsToDisplay(spells);
    }, [spells]);

    /* 
    Filter spells by search phrase
    */
    useEffect(() => {
        const filteredSpellsToDisplay = spells.filter((spell) => {
            if (spell.name.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1) {
                return spell;
            }
        });
        setSpellsToDisplay(filteredSpellsToDisplay);
    }, [searchPhrase]);

    const handleReset = () => {
        setSpellsToDisplay(spells);
        setSearchPhrase("");
        spellsActions.clearSpell();
    };

    return (
        <div>
            <SpellsSearchBox
                isSpellsLoading={isSpellsLoading}
                spellsCount={spells.length}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                handleReset={handleReset}
            />
            {!isSpellsLoading && <p></p>}
            {isSpellsLoading && <Spinner />}
            <div className="spells-container">
                {spellsToDisplay.map((spell) => {
                    return (
                        <SpellCard
                            key={spell.index}
                            index={spell.index}
                            name={spell.name}
                            url={spell.url}
                            getSpell={spellsActions.getSpell}
                            addToFavorites={spellsActions.addToFavorites}
                            removeFromFavorites={spellsActions.removeFromFavorites}
                        />
                    );
                })}
            </div>
            {spellsToDisplay.length > 0 && (
                <SpellsCount
                    filteredSpellCount={spellsToDisplay.length}
                    totalSpellsCount={spells.length}
                />
            )}
        </div>
    );
};
export default Spells;
