import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Navigation from './Navigation'
import { API_KEY } from './Constants'
import { Provider } from 'react-redux'
import createStore from './Redux'
import axios from 'axios'

const store = createStore();

export class App extends Component {

  constructor(props){
    super(props)
    axios.defaults.headers.common['X-RapidAPI-Key'] = API_KEY
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    )
  }
}

export default App
