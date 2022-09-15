import { SPELLS_ACTIONS } from "../constants";

export function getSpells () {
    return {
        type: SPELLS_ACTIONS.GET_SPELLS,
        payload: {}
    }
}

export function getSpellsSuccess (spells) {
    return {
        type: SPELLS_ACTIONS.GET_SPELLS_SUCCESS,
        payload: { spells }
    }
}

export function getSpellsError (error) {
    return {
        type: SPELLS_ACTIONS.GET_SPELLS_ERROR,
        payload: { error }
    }
}

export function getSpell (index) {
    return {
        type: SPELLS_ACTIONS.GET_SPELL,
        payload: { index }
    }
}

export function getSpellSuccess (spell) {
    return {
        type: SPELLS_ACTIONS.GET_SPELL_SUCCESS,
        payload: { spell }
    }
}

export function getSpellError (error) {
    return {
        type: SPELLS_ACTIONS.GET_SPELL_ERROR,
        payload: { error }
    }
}

export function clearSpell () {
    return {
        type: SPELLS_ACTIONS.CLEAR_SPELL,
    }
}

export function addToFavorites (spell) {
    return {
        type: SPELLS_ACTIONS.ADD_TO_FAVORITES,
        payload: { spell }
    }
}

export function removeFromFavorites (index) {
    return {
        type: SPELLS_ACTIONS.REMOVE_FROM_FAVORITES,
        payload: { index }
    }
}

export function updateFavorites (favorites) {
    return {
        type: SPELLS_ACTIONS.UPDATE_FAVORITES,
        payload: { favorites }
    }
}

export function isSpellsLoading (isSpellsLoading) {
    return {
        type: SPELLS_ACTIONS.IS_SPELLS_LOADING,
        payload: { isSpellsLoading }
    }
}

export function isSpellLoading (isSpellLoading) {
    return {
        type: SPELLS_ACTIONS.IS_SPELL_LOADING,
        payload: { isSpellLoading }
    }
}