import { INITIAL_STATE, SPELLS_ACTIONS } from "../constants";

export default function spellsReducer(
  state = INITIAL_STATE.SPELL_STATE,
  action
) {
  const { spells, spell, favorites, isSpellsLoading, isSpellLoading, error } = action.payload || {};

  switch (action.type) {
    case SPELLS_ACTIONS.GET_SPELLS_SUCCESS:
      return {
        ...state,
        spells,
      };
    case SPELLS_ACTIONS.GET_SPELL_SUCCESS:
      return {
        ...state,
        spell,
      };
    case SPELLS_ACTIONS.IS_SPELLS_LOADING:
      return {
        ...state,
        isSpellsLoading,
      };
    case SPELLS_ACTIONS.IS_SPELL_LOADING:
      return {
        ...state,
        isSpellLoading,
      };
    case SPELLS_ACTIONS.UPDATE_FAVORITES:
      return {
        ...state,
        favorites,
      };
    case SPELLS_ACTIONS.CLEAR_SPELL:
      return {
        ...state,
        spell: null,
      };
    case SPELLS_ACTIONS.GET_SPELLS_ERROR:
    case SPELLS_ACTIONS.GET_SPELL_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
}
