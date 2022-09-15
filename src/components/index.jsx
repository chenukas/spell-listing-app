import React from 'react';
import { Component } from 'react';
import Spells from './Spells';
import Spell from './Spell';
import Favorites from './Favorites';
import "./styles.css";
import ParticlesBg from 'particles-bg'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        const { spellsActions } = this.props;
        spellsActions.getSpells();
    }

    render() {
        const { spellsActions, spellsState: { spells, spell, favorites, isSpellsLoading, isSpellLoading } } = this.props;

        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-center">The 5th Edition Dungeons and Dragons API</h1>
                    <div className="row px-4 content-row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4 mt-2 spells-panel">
                                    <Spells
                                        isSpellsLoading={isSpellsLoading}
                                        spells={spells}
                                        spellsActions={spellsActions}
                                    />
                                </div>
                                <div className="col-sm-4 spell-info-panel">
                                    <Spell
                                        spell={spell}
                                        isSpellLoading={isSpellLoading}
                                    />
                                </div>
                                <div className="col-sm-4 fav-panel">
                                    <Favorites
                                        favorites={favorites}
                                        removeFromFavorites={spellsActions.removeFromFavorites}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ParticlesBg type="cobweb" bg={true} />
                </div>
            </div>
        )
    }
}
