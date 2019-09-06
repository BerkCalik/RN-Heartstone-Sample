import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../../Styles'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  row: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    fontSize: Fonts.size.input,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.inputLabelGray,
    flex: 1,
    marginRight: 5
  },
  loading:{
    marginTop: 10
  }
})