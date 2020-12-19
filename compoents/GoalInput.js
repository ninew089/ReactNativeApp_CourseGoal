import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Button,Modal} from 'react-native'
const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }
 
    return<Modal visible={props.visible}>
    <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal} /> 
            <View  style={styles.button}>
            <Button title="CANCEL" onPress={props.onClose} color="red"  />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
               
     
            
           
    </View>
    </Modal>
           
}
const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'   
    },
    textInput: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
        padding: 10,
      marginBottom:10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%'
    }
  });

export default GoalInput
