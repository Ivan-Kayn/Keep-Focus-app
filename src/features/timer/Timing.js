import React from 'react'
import {View, StyleSheet} from "react-native"
import {BaseButton} from '../../componenst/BaseButton'

export const Timing = ({changeTime}) => {
    return(
        <>
            <View style={styles.timingButton}>
                <BaseButton
                    size={75}
                    title={10}
                    onPress={() => changeTime(10)}
                />
            </View>
            <View style={styles.timingButton}>
                <BaseButton
                    size={75}
                    title={15}
                    onPress={() => changeTime(15)}
                />
            </View>
            <View style={styles.timingButton}>
                <BaseButton
                    size={75}
                    title={20}
                    onPress={() => changeTime(20)}
                />
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    }
})
