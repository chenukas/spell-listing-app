import { takeEvery, put, call, select } from 'redux-saga/effects';
import { SPELLS_ACTIONS } from '../constants';
import { spellsActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_SPELLS, GET_SPELL } from '../constants/api';
import { isHasMatch } from '../helpers/arrayHelper';

function* handleGetSpells(action) {
    try {
        yield put(spellsActions.isSpellsLoading(true));
        const { data } = yield call(processRequest, GET_SPELLS);
        yield put(spellsActions.getSpellsSuccess(data.results));
        yield put(spellsActions.isSpellsLoading(false));
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(spellsActions.getSpellsError(error || e));
        yield put(spellsActions.isSpellsLoading(false));
    }
}

function* handleGetSpell(action) {
    try {
        const { index } = action.payload;
        yield put(spellsActions.isSpellLoading(true));
        const { data } = yield call(processRequest, GET_SPELL(index));
        yield put(spellsActions.getSpellSuccess(data));
        yield put(spellsActions.isSpellLoading(false));
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(spellsActions.getSpellError(error || e));
        yield put(spellsActions.isSpellLoading(false));
    }
}

function* handleAddToFavorites(action) {
    try {
        const { spell } = action.payload;
        const state = yield select();
        const { spellsState : { favorites } } = state;
        const hasMatch = isHasMatch(favorites, spell.index);

        if (!hasMatch) {
            const newFavorites = [...favorites, spell];
            yield put(spellsActions.updateFavorites(newFavorites));
        }
    } catch (e) {
        console.log(e);
    }
}

function* handleRemoveFromFavorites(action) {
    try {
        const { index } = action.payload;
        const state = yield select();
        const { spellsState : { favorites }} = state;
        const hasMatch = isHasMatch(favorites, index);

        if (hasMatch) {
            const newFavorites = favorites.filter((favorite) => { 
                if(favorite.index !== index) 
                return favorite; 
            });
            yield put(spellsActions.updateFavorites(newFavorites));
        }
    } catch (e) {
        console.log(e);
    }
}

export function* watchSpellsSagas() {
    yield takeEvery(SPELLS_ACTIONS.GET_SPELLS, handleGetSpells);
    yield takeEvery(SPELLS_ACTIONS.GET_SPELL, handleGetSpell);
    yield takeEvery(SPELLS_ACTIONS.ADD_TO_FAVORITES, handleAddToFavorites);
    yield takeEvery(SPELLS_ACTIONS.REMOVE_FROM_FAVORITES, handleRemoveFromFavorites);
}