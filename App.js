import { createStackNavigator, createAppContainer } from "react-navigation";
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


const AppNavigator = createStackNavigator({
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
  }, {
  defaultNavigationOptions:{ 
    headerTitle:'介護プロ',
    headerStyle: {
      backgroundColor:'#ffc0cb',
    },
    headerTitleStyle: {
      color:'#fff',
    },
  },
});

export default createAppContainer(AppNavigator);