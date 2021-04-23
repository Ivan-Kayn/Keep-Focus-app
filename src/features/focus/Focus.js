import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import {BaseButton} from "../../componenst/BaseButton"
import {fontSizes, spacing} from "../../utils/sizes";


export const Focus = ({addSubject}) => {

    const [tempItem, setTempItem] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    What would you like to focus on?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{flex: 1, marginRight: 20}}
                        onSubmitEditing={({nativeEvent}) => {
                            setTempItem(nativeEvent.text)
                        }}
                    />
                    <BaseButton
                        title="+" size={60}
                        onPress={() => {
                            addSubject(tempItem);
                            console.log('from button')
                        }}
                    />
                </View>
            </View>
        </View>)
}

// .create() is used for optimization
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        color: '#fff'
    },
    titleContainer: {
        padding: spacing.md,
        justifyContent: 'center',
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: fontSizes.lg,
        marginTop: 60,
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
