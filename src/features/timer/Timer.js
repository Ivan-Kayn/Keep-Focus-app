import React, {useState} from 'react'
import {View, Text, StyleSheet} from "react-native"
import {spacing} from "../../utils/sizes"
import {Countdown} from "../../componenst/Countdown"
import {BaseButton} from "../../componenst/BaseButton"
import {ProgressBar} from 'react-native-paper'
import {Timing} from "./Timing";
import {useKeepAwake} from "expo-keep-awake"


export const Timer = ({focusSubject}) => {
    // keeping phone awake when focusing
    useKeepAwake()

    const [minutes, setMinutes] = useState(0.1)
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const onProgress = (progress) => {
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(min)
        setProgress(1)
        setIsStarted(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown onProgress={onProgress} isPaused={!isStarted} minutes={minutes}/>
            </View>
            <View style={{paddingTop: spacing.xxl}}>
                <Text style={styles.title}>Focused on: </Text>
                <Text style={styles.task}>
                    {focusSubject}
                </Text>
            </View>

            <View style={{paddingTop: spacing.lg}}>
                <ProgressBar
                    color={'#ffffff'}
                    progress={progress}

                />
            </View>

            <View style={styles.buttonWrapper}>
                <Timing changeTime={changeTime} />
            </View>

            <View style={styles.buttonWrapper}>
            {
                isStarted ?
                    <BaseButton
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    /> :
                    <BaseButton
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />
            }
            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: '#fff',
        textAlign: 'center',

    },
    task: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper:{
        flexDirection: 'row',
        flex: 0.3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
