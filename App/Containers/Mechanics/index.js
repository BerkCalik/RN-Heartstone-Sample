import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { getMechanics } from '../../Redux/Actions/CardActions'
import { connect } from 'react-redux'

import styles from './Styles'
export class Mechanics extends Component {

  static navigationOptions = ({ navigation }) => {    
    return {
      headerRight: (
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.navigate("CardsSearch")}
        >
          <Text style={styles.headerButtonText}>Search Card</Text>
        </TouchableOpacity>
      ),
    }    
  };

  componentDidMount() {
    this.props.getMechanics()
  }

  render() {
    const { pending, mechanics } = this.props
    return (
      <View>
        {
          pending ? <ActivityIndicator style={[styles.alignSelfCenter, styles.mt20]}/> :
          <FlatList 
            data={mechanics}
            refreshing={pending}
            onRefresh={() => this.props.getMechanics()}
            keyExtractor={(item, index) => "mechanic-"+index}
            renderItem={({item, index}) => (
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("Cards", { mechanic: item })} 
                style={{padding: 15}} 
                key={"mechanic-"+index}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        }        
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