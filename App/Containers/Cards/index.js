import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { getCards } from '../../Helpers'
import { Card } from '../../Components'

import styles from './Styles'
export class Cards extends Component {

  constructor(props){
    super(props)
    //console.log("Cards Screen constructor", props)
    
    const cards = getCards(props.cards, props.navigation.getParam("mechanic"))
    this.state = { cards }
    console.log("Filtered Cards", cards)
  }

  renderItem = ({item, index}) => (
    <Card item={item} index={index} key={"card-"+index}/>
  )

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
            keyExtractor={(item, index) => "card-"+index}
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
