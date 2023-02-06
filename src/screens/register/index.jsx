import { useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Card } from "../../components";
import { styles } from "./styles";
import { colors } from "../../constants";

const Register = ({navigation}) =>{
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValue2, setEnteredValue2] = useState("");
    const [enteredValue3, setEnteredValue3] = useState("");
    const [enteredValue4, setEnteredValue4] = useState("");
    const onHandlerChange = (text) => {
      setEnteredValue(text.replace(/[^A-z0-9]/g, ""));
    };
    const onHandlerChange2 = (text) => {
      setEnteredValue2(text.replace(/[^A-z0-9]/g, ""));
    };
    const onHandlerChange3 = (text) => {
        setEnteredValue3(text.replace(/[^A-z0-9]/g, ""));
      };
      const onHandlerChange4 = (text) => {
        setEnteredValue4(text.replace(/[^a-zA-Z0-9._-]+@[^a-zA-Z0-9.-]+\.[^a-zA-Z]{2,6}$/g, ""));
      };
  
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}>
            <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
                <ScrollView>
                    <View style={styles.container}>
                    <Card  style={styles.inputContainer}>
                        <Text style={styles.title}>Regístrate</Text>
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
                        <TextInput
                        value={enteredValue3}
                        keyboardType='default'
                        style={styles.input}
                        placeholder="Confirmar Contraseña"
                        secureTextEntry={true}
                        onChangeText={onHandlerChange3}
                        />
                        <TextInput
                        value={enteredValue4}
                        keyboardType='default'
                        style={styles.input}
                        placeholder="Correo"
                        inputMode="email"
                        onChangeText={onHandlerChange4}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Volver" onPress={()=>navigation.navigate('Iniciar Sesión')} color={colors.secondary} />
                            <Button title="Confirmar" onPress={()=>navigation.navigate('Inicio',{userName: enteredValue})} color={colors.primary} />
                        </View>
                    </Card>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register;