import React, { useRef, useState } from "react";
import {StyleSheet, TextInput, Text, Button, View} from "react-native";

const Form = ({ addHandler }) => {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder={'Впишите задачу'} />
            <Button style={styles.btn} onPress={() => addHandler(text)} title='Добавить задачу'/>
        </View>
    )

};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%'
    },
    btn: {
        width: '40%'
    }
});

export default Form;
