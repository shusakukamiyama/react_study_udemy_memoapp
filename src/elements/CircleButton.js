import React from 'react';
import { View, StyleSheet, TouchableHighlight} from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            FontAwesome: fontAwesome,
        });

        this.setState({ fontLoaded: true });
    }
    render(){
        const { name, style, color, onPress } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if ( color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return(
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
                <View style={[styles.circleButton, {backgroundColor:bgColor}]}>
                    {
                        this.state.fontLoaded ? (
                            <CustomIcon name={ name } style={[styles.circleButtonTitle , {color:textColor}]}/>
                        ): null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 32,
        right: 32,
    },
    circleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 10,
    },
    circleButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 32,
        color: "#fff",
    },
});

export default CircleButton;