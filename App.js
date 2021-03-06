import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";
require("firebase/firestore");
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

const config = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId:             ENV.FIREBASE_APP_ID
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    MemoCreate: { screen : MemoCreateScreen },
  }, {
  defaultNavigationOptions:{ 
    headerTitle:'介護プロ',
    headerBackTitle: null,
    headerTintColor:'#fff',
    headerStyle: {
      backgroundColor:'#ffc0cb',
    },
    headerTitleStyle: {
      color:'#fff',
    },
  },
});

export default createAppContainer(AppNavigator);