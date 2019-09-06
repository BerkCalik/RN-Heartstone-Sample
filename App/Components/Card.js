import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import CardFlip from 'react-native-card-flip'
import { Metrics, Fonts, Images } from '../Styles'

const Card = ({
  index, item
}) => {
  const [imageVisible, setImageVisible] = useState(true);

  getImage = (img) => {
    if (img == null) {
      return Images.noImage
    }
    return {uri: img}
  }

  return (
    <CardFlip style={styles.cardContainer} ref={ (card) => this['card' + index] = card } key={index}>
      <TouchableOpacity style={styles.card} onPress={() => this['card' + index].flip()} >
        <View>
        {
          imageVisible ?
          <Image 
            source={this.getImage(item.img)} 
            style={styles.img} 
            onError = { () => setImageVisible(false) }

          /> : <Text style={{alignSelf: "center"}}>Image load error.</Text>
        }
        <Text style={[styles.text]}>xx {item.name}</Text>
        </View>
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

export default Card

const styles = StyleSheet.create({
  cardContainer:{    
    width: Metrics.screenWidth * 0.8,
    height: Metrics.screenHeight * 0.45,
    marginTop: 10,
    alignSelf: "center",
  },
  card:{
    flex: 1,
  },
  detailCard: {
    flex: 1,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: Fonts.size.input,
    marginTop: 10,
    fontWeight: "bold",
    color: "#fff"
  },
  img: {
    width: "100%", 
    height: "100%",
    //backgroundColor: "blue",
    resizeMode: "contain",    
  },
})
