import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import * as screens from './Screens'

const AppNavigator = createStackNavigator({
  Mechanics: {
    screen: screens.Mechanics,
    navigationOptions: {
      title: "Mechanics"
    }
  },
  Cards: {
    screen: screens.Cards,
  },
  CardsSearch: {
    screen: screens.CardsSearch,
  },
})

export default createAppContainer(AppNavigator)