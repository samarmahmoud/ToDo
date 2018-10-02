import React from 'react';
import Home from '../Screens/Home';
import New from '../Screens/NewTask';
import Dreawer from '../Screens/Drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

const MainStack=createStackNavigator({
    HomeScreen : { screen : Home },
    NewTaskScreen : { screen : New }

}, 
{ navigationOptions:({navigation})=>{
    return{
        headerLeft:<Icon name={'menu'} size={30} color="#ffffff" 
        onPress={()=> navigation.toggleDrawer() } 
        style={{marginLeft:15}}  />,
       
    }
}



});
const sideMenu= createDrawerNavigator({
    HomeScreen :{screen: MainStack} 
},{
    contentComponent : Dreawer,
     drawerWidth:300


})
export default sideMenu;