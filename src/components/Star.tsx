import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
    filled: boolean
}
const Star = ({ filled }: Props) => {
    return (
        <Text>
            <Icon name={filled ? 'star' : 'staro'} size={35} color="#7F00FF" />
        </Text>
    )
}

export default Star

const styles = StyleSheet.create({})
