import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
  } from '@expo/vector-icons';
import styles from "./styles";

const InputBox = () => {

    const [messsage, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${messsage}`)
    }

    const onPress = () =>{
        if(!messsage) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.midContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey" />
            <TextInput 
            placeholder={"Type a message"}
              style={styles.textInput}
               multiline
               value={messsage}
               onChangeText={setMessage}
               
            />
            <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
            {!messsage && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
            </View>
              <TouchableOpacity onPress={onPress}>
              <View style={styles.buttonContainer}>
                {
                    !messsage ? <MaterialCommunityIcons name="microphone" size={28} color="white" /> 
                    : < MaterialIcons name="send" size={28} color="white"/>
                }
            
            </View>
              </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;