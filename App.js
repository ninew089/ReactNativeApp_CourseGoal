import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList } from 'react-native';
import GoalItem from './compoents/GoalItem'
import GoalInput from './compoents/GoalInput'
export default function App() {

  const [courseGoal,setCourseGoal] = useState([]);
  const [isAddMode,setIsAddMode]=useState(false)
  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [...courseGoal, { id: Math.random().toString(), value: goalTitle }]);
 
  }
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal)=>goal.id !==goalId)
    })
  }
  const closeModalHandler = () => {
    setIsAddMode(false)
  }
  return (

    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true) } />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onClose={closeModalHandler}/>
        <FlatList
          keyExtractor={(item,index)=>item.id}
          data={courseGoal} renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler}/>} />
      </View>

  );
  
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  }
});
