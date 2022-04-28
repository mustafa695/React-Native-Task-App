import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {onCahngeCheckBox, removeTodo} from '../store/action';

const List = ({todo, setTitle, setEdited, setEdtInd}) => {
  const dispatch = useDispatch();

  const editTodo = ind => {
    setEdited(true);
    setEdtInd(ind);
    let dupTodo = [...todo];
    let updateTitle = dupTodo[ind].title;
    setTitle(updateTitle);
  };

  return (
    <View style={styles.listWrapper}>
      {todo?.map((item, ind) => {
        return (
          <View style={styles.inlineLine} key={ind}>
            <CheckBox
              disabled={false}
              value={item?.done}
              onValueChange={newValue =>
                dispatch(onCahngeCheckBox(newValue, ind))
              }
              tintColors={{true: '#620bee', false: '#212121'}}
            />

            <View style={styles.todoText}>
              <Text
                style={[item?.done && styles.lineThrough, styles.textTitle]}>
                {item?.title}
              </Text>
            </View>
            <View style={styles.iconWrap}>
              <TouchableOpacity onPress={() => editTodo(ind)}>
                <Image
                  style={{width: 20, height: 20, marginRight: 5}}
                  source={require('../assets/icons/edit.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeTodo(item?.id));
                  setEdited(false);
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/icons/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    paddingTop: 30,
  },
  inlineLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  todoText: {
    width: '75%',
  },
  textTitle: {
    color: '#212121',
  },
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
export default List;
