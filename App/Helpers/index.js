export const getCards = (cards, mechanic) => {
  let result = []
  Object.keys(cards).map(key => {
    let filteredCards = cards[key].filter(c => c.mechanics != null && c.img != null && c.mechanics.filter(mec => mec.name == mechanic).length > 0)
      
    if(filteredCards.length > 0){
      result = result.concat(filteredCards)      
    }
  })
  return result
}