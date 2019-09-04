import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { getMechanics } from '../../Redux/Actions/CardActions'
import { connect } from 'react-redux'

export class Mechanics extends Component {

  componentDidMount() {
    this.props.getMechanics()
  }

  go = (mechanic) => {
    this.props.navigation.navigate("Cards", { mechanic })
  }

  render() {
    const { pending, mechanics } = this.props
    return (
      <View>
        <Text> Pending: {pending.toString()} </Text>
        <FlatList 
          style={{marginTop: 20}}
          data={mechanics}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => this.go(item)} style={{padding: 15}} key={"mechanic-"+index}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  pending: state.cardReducer.pending,
  mechanics: state.cardReducer.mechanics
})

const mapDispatchToProps = {
  getMechanics
}

export default connect(mapStateToProps, mapDispatchToProps)(Mechanics)
