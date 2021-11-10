import React, { useRef, useState } from "react";
import {StyleSheet, View, FlatList, Text} from "react-native";
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [listOfItems, setListOfItems] = useState([
      {text: 'Купить молоток', key: '1'},
      {text: 'Помыть машину', key: '2'},
      {text: 'Купить квартиру', key: '3'},
      {text: 'Стать миллионером', key: '4'}
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
        return [{text: text, key: Math.random().toString(36).substring(7)},
            ...list
        ]
    })
  }

  const deleteHandler = (key) => {
      setListOfItems((list) => {
          return list.filter(el => el.key !== key)
      })
  }

  return (
        <View style={styles.container}>
            <Header/>
            <Form addHandler={addHandler}/>
            <View>
                <FlatList data={listOfItems} renderItem={({ item }) => (
                    <List el={item} deleteHandler={deleteHandler} />
                )} />
            </View>
        </View>
  )
};

const styles = StyleSheet.create({

});

export default App;
