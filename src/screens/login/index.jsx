import React, {useState} from 'react'
import { View, Text, TextInput, Button, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Alert, Platform, ScrollView } from "react-native";
import { Card } from '../../components';
import {styles} from './styles'
import { colors } from '../../constants';
const LogIn = ({onHandleLog}) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValue2, setEnteredValue2] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedName, setSelectedName] = useState(null);
  
    const onHandlerChange = (text) => {
      setEnteredValue(text.replace(/[^A-z0-9]/g, ""));
    };
    const onHandlerChange2 = (text) => {
      setEnteredValue2(text.replace(/[^A-z0-9]/g, ""));
    };
  
    const onHandleReset = () => {
      setEnteredValue("");
      setEnteredValue2("");
      setConfirmed(false);
    };
  
    const onHandleConfirm = () => {
      setConfirmed(true);
      setSelectedName(enteredValue);
      setEnteredValue("");
      }

  
    const onHandleLogIn = () => {
      onHandleLog(selectedName);
    };
  
    const Confirmed = () =>
      confirmed ? (
        <Card style={styles.inputContainer}>
          <Text style={styles.confirmedTitle}>Hola, el usuario ingresado es:</Text>
          <Text style={styles.confirmedName}>{selectedName} </Text>
          <Text style={styles.confirmedTitle}>¿Deseas continuar?</Text>
          <Button title="Continuar" onPress={onHandleLogIn} color={colors.primary} />
        </Card>
      ) : null;
  
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
                  <Button title="Reiniciar" onPress={onHandleReset} color={colors.secondary} />
                  <Button title="Confirmar" onPress={onHandleConfirm} color={colors.primary} />
                </View>
              </Card>
              <Confirmed />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );



}

export default LogIn;