import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Label } from '..';

interface PropsTypes {
    LeftText?: string;
    MainText?: string;
    RightText?: string;
    leftonPress?: () => void;
    rightOnPress?: () => void;
}
const MainHeader = ({ LeftText, MainText, RightText, leftonPress, rightOnPress }: PropsTypes) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { justifyContent: 'flex-start' }]} onPress={leftonPress} >
                <Label style={styles.buttonText} text={LeftText} />
            </TouchableOpacity>
            <View style={styles.button}>
                <Label style={styles.Firstbutton} text={MainText} />
            </View>
            <TouchableOpacity style={[styles.button, { justifyContent: 'flex-end' }]} onPress={rightOnPress} >
                <Label style={styles.buttonText} text={RightText} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { height: 50, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'red' },
    button: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 12,
        color: 'white'
    },
    Firstbutton: {
        color: 'red',
        fontSize: 19,
        fontWeight: '600'
    }
});

export default MainHeader;