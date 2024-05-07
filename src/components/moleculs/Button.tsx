import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Label } from '../atoms';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Label text={text} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Button;