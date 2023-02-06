import React, {useState} from 'react'
import { View, Text, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Alert, Platform, ScrollView } from "react-native";
import { Card } from '../../components';
import {styles} from './styles'
import { colors } from '../../constants';
const LogIn = ({navigation}) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValue2, setEnteredValue2] = useState("");
    const [selectedName, setSelectedName] = useState(null);
  
    const onHandlerChange = (text) => {
      setEnteredValue(text.replace(/[^A-z0-9]/g, ""));
    };
    const onHandlerChange2 = (text) => {
      setEnteredValue2(text.replace(/[^A-z0-9]/g, ""));
    };
  
    const onHandleConfirm = () => {
      setConfirmed(true);
      setSelectedName(enteredValue);
      setEnteredValue("");
      }


  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.title}>Bienvenido a Mi App</Text>
              <Card  style={styles.inputContainer}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput
                  value={enteredValue}
                  keyboardType='default'
                  style={styles.input}
                  placeholder="Usuario"
                  onChangeText={onHandlerChange}
                />
                <TextInput
                  value={enteredValue2}
                  keyboardType='default'
                  style={styles.input}
                  placeholder="Contraseña"
                  secureTextEntry={true}
                  onChangeText={onHandlerChange2}
                />
                <View style={styles.buttonContainer}>
                  <Button title="Registrarse" onPress={()=>navigation.navigate('Regístrate')} color={colors.secondary} />
                  <Button title="Confirmar" onPress={()=>navigation.navigate('Inicio', {userName: enteredValue})} color={colors.primary} />
                </View>
              </Card>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );



}

export default LogIn;