import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { getCards } from '../../Helpers'
import CardFlip from 'react-native-card-flip'

import styles from './Styles'
export class Cards extends Component {

  constructor(props){
    super(props)
    //console.log("Cards Screen constructor", props)
    
    const cards = getCards(props.cards, props.navigation.getParam("mechanic"))
    this.state = { cards }
    console.log("Filtered Cards", cards)
  }

  renderItem = ({item, index}) => {
    return (
      <CardFlip style={styles.cardContainer} ref={ (card) => this['card' + index] = card } key={index}>
        <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} >
          <Image source={{uri: item.img}} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.detailCard]} onPress={() => this['card' + index].flip()} >
          <Text style={[styles.text]}>ID: {item.cardId}</Text>
          <Text style={[styles.text]}>Name: {item.name}</Text>
          <Text style={[styles.text]}>Card Set: {item.cardSet}</Text>
          <Text style={[styles.text]}>Faction: {item.faction}</Text>
          <Text style={[styles.text]}>Type: {item.type}</Text>
        </TouchableOpacity>
      </CardFlip>
    )
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
            renderItem={this.renderItem}
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
