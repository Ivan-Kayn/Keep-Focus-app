import React, {useState} from 'react'
import {Text, View, StyleSheet, Platform} from 'react-native'
import {Focus} from "./src/features/focus/Focus"
import {Timer} from './src/features/timer/Timer'
import {spacing} from "./src/utils/sizes"

export default function App() {

    // returning state line and function to change it
    const [focusSubject, setFocusSubject] = useState('First task')

    return (
        <View style={styles.container}>
            {
                focusSubject ?
                    (<Timer focusSubject={focusSubject} />) :
                    (<Focus addSubject={setFocusSubject}/>)
            }
        </View>)
}

// .create() is used for optimization
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? spacing.xxl : spacing.xl,
        flex: 1,
        backgroundColor: '#d92e2e',
    },
    text: {
        color: 'white',

    }
});
