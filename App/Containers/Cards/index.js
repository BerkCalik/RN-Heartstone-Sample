import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getCards } from '../../Helpers'

export class Cards extends Component {

  constructor(props){
    super(props)
    //console.log("Cards Screen constructor", props)
    
    const cards = getCards(props.cards, props.navigation.getParam("mechanic"))
    this.state = { cards }
    console.log("Filtered Cards", cards)
  }

  render() {
    const { cards } = this.state
    return (
      <View>
        {
          cards == null ? null :
          <FlatList 
            style={{marginTop: 20}}
            data={cards}
            renderItem={({item}) => (
              <TouchableOpacity style={{padding: 15}} key={item.cardId}>
                <Text>{item.cardId} {item.name}</Text>
              </TouchableOpacity>
            )}
          />
        }        
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cardReducer.cards
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
