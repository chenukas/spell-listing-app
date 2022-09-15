import { fork } from 'redux-saga/effects';
import * as spellsSagas from './spellsSagas';

export default function* rootSaga(store) {
    yield fork(spellsSagas.watchSpellsSagas, store);
}