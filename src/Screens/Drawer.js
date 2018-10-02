import React from 'react';
import { Text, View } from 'react-native';
import {Header,CardSection} from '../common';


class Drawer extends React.Component{
   
    render(){
        return(
          <View style={style.Container}>
             <Header headerTitle={"Samar"}/>
             <CardSection headerTitle={"New"} IconName={'add'} 
             onTouch={()=>{this.props.navigation.navigate('NewTaskScreen')}}/>
             <View style={{borderBottomColor: '#eaeaea', borderBottomWidth: 1}}></View>
             <CardSection headerTitle={"your Todos"} IconName={'done'}/>
          </View>
        );
    }

}
export default Drawer;

const style={
    Container:{
        flex:1,
        alignItems: 'flex-start',
        
    },

}