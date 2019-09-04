import * as actionTypes from '../ActionTypes'

const initialState = {
  cards: null,
  pending: true,
  mechanics: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.GET_CARDS+actionTypes.TYPE_SUFFIX_PENDING:
    console.log("reducer pending")
    return { ...state, pending: true }
  case actionTypes.GET_CARDS+actionTypes.TYPE_SUFFIX_ERROR:
    return { ...state, pending: false, cards: [] }
  case actionTypes.GET_CARDS+actionTypes.TYPE_SUFFIX_SUCCESS:
    const mechanics = cards2Mechanics(payload)
    return { ...state, pending: false, mechanics, cards: payload }

  default:
    return state
  }
}

cards2Mechanics = (cards) => {
  let mechanics = []
  Object.keys(cards).map(key => {
    cards[key].map(card => {
      if (card.mechanics != null) {
        card.mechanics.map(mechanic => {
          if (mechanics.indexOf(mechanic.name) == -1) {
            mechanics.push(mechanic.name)
          }
        })  
      }
    })    
  })

  console.log(mechanics)
  return mechanics
}