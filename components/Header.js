import React, { useRef, useState } from "react";
import {StyleSheet, View, Text} from "react-native";

const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Cписок дел</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 24,
        color: 'red',
        textAlign: 'center'
    }
});

export default Header;
