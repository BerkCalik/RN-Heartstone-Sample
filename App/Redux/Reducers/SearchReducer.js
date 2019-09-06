import * as actionTypes from '../ActionTypes'

const initialState = {
  pending: false,
  cards: [],
  query: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  //case actionTypes.SEARCH_QUERY_CHANGED:
  //  return { ...state, query: payload, cards: payload == "" ? [] : state.cards }
  
  case actionTypes.SEARCH_CARDS + actionTypes.TYPE_SUFFIX_PENDING:
    return { ...state, pending: true }
  case actionTypes.SEARCH_CARDS + actionTypes.TYPE_SUFFIX_ERROR:
    return { ...state, pending: false, cards: [] }
  case actionTypes.SEARCH_CARDS + actionTypes.TYPE_SUFFIX_SUCCESS:
    return { ...state, cards: payload, pending: false }

  default:
    return state
  }
}
