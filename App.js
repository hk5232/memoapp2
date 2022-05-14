import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Form from './src/screens/Form';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
    };
  }

  addNewItem(todoList) {
    this.setState({ todoList })
  }

  render() {
    const { todoList } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={ { title: '一覧' } }
          >
            {props => <Home {...props} todoList={todoList} />}
          </Stack.Screen>
          <Stack.Screen
            name="Form"
            options={ { title: '登録' } }
          >
            {props => <Form {...props} todoList={todoList} addNewItem={v => this.addNewItem(v)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}