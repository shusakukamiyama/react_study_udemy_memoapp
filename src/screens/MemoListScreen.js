import React from 'react';
import {View, StyleSheet} from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

//this.props.navigation.navigate("MemoEdit") ;

class MemoListScreen extends React.Component {
    handlePress() {
        const { params } = this.props.navigation.state;
        const db = firebase.firestore();
        db.collection(`users/${params.currentUser.uid}/memos`).add({
            body: 'User checkUser check',
            createdOn: '2019/07/03'
        })
        .then((docRef) => {
            console.log(docRef.id);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name="plus" onPress={this.handlePress.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor:'#fffdf6',
    },
  });

export default MemoListScreen;