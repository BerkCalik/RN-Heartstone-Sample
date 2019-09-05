import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../../Styles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardContainer:{    
    width: Metrics.screenWidth * 0.8,
    height: Metrics.screenHeight * 0.45,
    marginTop: 10,
    alignSelf: "center",
  },
  card:{
    flex: 1,
    //backgroundColor: '#FE474C',
    
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
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
})