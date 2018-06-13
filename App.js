import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
)

const ChatScreen = ({ navigation }) => {
  const { user } = navigation.state.params
  console.log(user)
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <Text>User from link: {user}</Text>
    </View>
  )
}

const StackExample = createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat/:user',
  },
})

const SwitchExample = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat/:user',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <SwitchExample uriPrefix="deeplinkexample://" />
      // <StackExample uriPrefix="deeplinkexample://" />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
