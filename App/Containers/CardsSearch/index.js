import React, { Component } from 'react'
import { Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { search } from '../../Redux/Actions/CardActions'
import { connect } from 'react-redux'
import { Card } from '../../Components'
import _ from 'lodash'

import styles from './Styles'
export class CardsSearch extends Component {

  renderItem = ({item, index}) => {
    return <Card key={"card-"+index} item={item} index={index} />
  }

  constructor(props) {
    super(props);
    this.state = {query: ""}
    this.updateMessage = _.debounce(this.updateMessage, 500);
  }

  onChange = (query) => {
    console.log("onChange query: ", query)
    this.setState({query})
    this.updateMessage(query);
  }

  updateMessage = message => {
    this.props.search(message)
  };

  render() {
    const { cards, pending } = this.props
    return (
      <View style={{flex: 1}}>
        <View style={[styles.row]}>
          <TextInput 
            value={this.state.query}
            onChangeText={this.onChange}            
            style={[styles.input]}
            placeholder="🔍 Search"
          />
          { pending ? <ActivityIndicator style={styles.loading}/> : null }          
        </View>        
        
        <FlatList 
          style={{marginTop: 20, flex: 1,}}
          data={cards}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => "card-"+index}
        />       

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  pending: state.searchReducer.pending,
  cards: state.searchReducer.cards,
  //query: state.searchReducer.query,
})

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsSearch)