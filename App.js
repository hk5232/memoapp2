      
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      memoValue: "",
      todoList: [],
    };
  }

  render() {
    const { todoValue, memoValue, todoList } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>やること</Text>
          <TextInput
            style={styles.formControl}
            value={todoValue}
            placeholder="何かやること"
            onChangeText={v => this.setState({ todoValue: v })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>メモ</Text>
          <TextInput
            style={styles.formControl}
            value={memoValue}
            placeholder="何かメモ"
            onChangeText={v => this.setState({ memoValue: v })}
          />
        </View>
        <Button
          title="登録"
          onPress={() => {
            const newList = todoList.concat({ todo: todoValue, memo: memoValue });
            this.setState({
              todoValue: "",
              memoValue: "",
              todoList: newList
            });
          }}
        />
        <FlatList
          style={styles.listBox}
          data={todoList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text>{item.todo}</Text>
                <Text>{item.memo}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.todo}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  },
  listItem: {
    height: 64,
    width: 200,
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
});