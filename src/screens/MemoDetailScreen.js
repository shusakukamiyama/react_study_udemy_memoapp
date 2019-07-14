import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
    const str = date.toDate().toISOString();
    return str.split("T")[0]
}

class MemoDetailScreen extends React.Component{
    state = {
        memo:{},
    }
    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    returnMemo(memo) {
        this.setState({ memo });
    }

    render() {
        const { memo } = this.state;
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <Text style={styles.memoHeaderTitle}>{ memo.body.substring(0, 10) }</Text>
                        <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        { memo.body }
                    </Text>
                </View>

                <CircleButton 
                    name="pencil" 
                    color='white' 
                    style={styles.editButton} 
                    onPress={() => { this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); }}
                />
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
    memoBody: {
        lineHeight:22,
        fontSize:15,
    },
});

export default MemoDetailScreen;