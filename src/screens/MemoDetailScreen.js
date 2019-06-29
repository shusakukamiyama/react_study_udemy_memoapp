import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <Text style={styles.memoHeaderTitle}>口座のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2019/06/27</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>口座のアイデアです</Text>
                </View>

                <CircleButton name="pencil" color='white' style={styles.editButton}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
    },
    memoHeader: {
        height:100,
        backgroundColor:'#fff',
        justifyContent:'center',
        padding:10,
    },
    memoHeaderTitle: {
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:4,
    },
    memoHeaderDate: {
        fontSize:12,
    },
    memoContent: {
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        flex:1,
        backgroundColor:'#eaeaea',
    },
    editButton: {
        top:75,
    },
});

export default MemoDetailScreen;