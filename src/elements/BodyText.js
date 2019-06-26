import React,{Component} from 'react';
import { View, Text, StyleSheet } from "react-native";

class BodyText extends Component {
    render(){
        return (
            <View>
                <Text style={styles.text}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color:"#DDD",
        backgroundColor:"#008080",
    }
});

export default BodyText;