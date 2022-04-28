import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import List from '../components/List';
import {addTodo, editTodo} from '../store/action';

const Home = () => {
  const [title, setTitle] = useState('');
  const [edited, setEdited] = useState(false);
  const [edtInd, setEdtInd] = useState('');
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);
 
  const addorEditTask = () => {
    if (!edited) {
      if (title === '') return;
      dispatch(addTodo(title));
      Keyboard.dismiss();
      setTitle('');
    } else {
      if (title === '') return;
      dispatch(editTodo(title, edtInd));
      setTitle('');
      setEdited(false);
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.head}>Task App</Text>
      {/* input  */}
      <View>
        <TextInput
          value={title}
          onChangeText={e => setTitle(e)}
          style={styles.textInput}
          placeholder="Enter Title"
        />
        <TouchableOpacity style={styles.addBtn} onPress={addorEditTask}>
          <Text style={styles.btnText}>
            {!edited ? 'Add Task' : 'Update Task'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* List of todo */}
      <List
        todo={todo}
        setEdited={setEdited}
        setEdtInd={setEdtInd}
        setTitle={setTitle}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  head: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
    color: '#212121',
    textTransform: 'uppercase',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingVertical: 8,
  },
  addBtn: {
    backgroundColor: '#620bee',
    width: 100,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;
