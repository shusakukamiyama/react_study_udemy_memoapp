import React from 'react';
import {View, StyleSheet, TextInput, TouchableHighlight, Text} from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from "react-navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
    state = {
        email: 'shusa@gmail.com',
        password: 'shusaku',
    }
    handleSubmit(){
        // this.props.navigation.navigate('Home')
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            console.log('success!', user);
            const resetAction = StackActions.reset ({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        })
        .catch((error) => {
            console.log('error!', error);
        });
    }
    hundlePress() {
        this.props.navigation.navigate('Signup');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ログイン</Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.email} 
                    onChangeText={(text) => { this.setState({ email:text}); }}
                    autoCapitalize = 'none'
                    autoCorrect = 'false'
                    placeholder = "Email Adress"
                />
                <TextInput 
                    style={styles.input} 
                    value={this.state.password} 
                    onChangeText={(text) =>{ this.setState({ password:text}); }}
                    autoCapitalize = 'none'
                    autoCorrect = 'false'
                    placeholder = "Password"
                    secureTextEntry
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.signup} onPress={this.hundlePress.bind(this)}>
                    <Text>メンバー登録する</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        padding:24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
    },
    title: {
        fontSize:28,
        alignSelf:'center',
        marginBottom:24,
    },
    button: {
        backgroundColor:'#E31676',
        height:48,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        width:'70%',
        alignSelf:'center',
    },
    buttonTitle: {
        color:'#fff',
        fontSize: 18,
    },
    signup: {
        marginTop:16,
        alignSelf:'center',
        fontSize:16,
    },
  });

export default LoginScreen;