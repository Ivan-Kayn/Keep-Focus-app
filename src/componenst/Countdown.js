import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, Text} from "react-native"
import {fontSizes, spacing} from "../utils/sizes";

const minToMills = (min) => {
    return min * 60 * 1000
}

const formatTime = (time) => time < 10 ? `0${time}` : time

export const Countdown = ({
                              minutes = 0.5,
                              isPaused,
                              onProgress

                          }) => {

    const interval = useRef(null)
    const [millis, setMillis] = useState(minToMills(minutes))
    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                return time
            }
            const timeLeft = time - 1000
            onProgress(timeLeft / minToMills(minutes))

            return timeLeft
        })

    }

    useEffect(() => {
        setMillis(minToMills(minutes))
    }, [minutes])

    useEffect((() => {
        console.log(millis)
    }), [millis])

    useEffect(() => {
        if (isPaused) {
            if(interval.current) clearInterval(interval.current)
            return
        }
        interval.current = setInterval(countDown, 1000)
        return () => {
            clearInterval(interval.current)
        }
    },[isPaused])

    const minute = Math.floor(millis / 1000 / 60) % 60
    const seconds = Math.floor(millis / 1000) % 60

    return (
        <Text style={styles.text}>
            {formatTime(minute)}:{formatTime(seconds)}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxl,
        fontWeight: 'bold',
        color: '#fff',
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    }
})
