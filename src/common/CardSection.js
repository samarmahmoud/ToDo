import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const CardSection =(props)=>(
    <TouchableOpacity onPress={props.onTouch} style={style.headerStyle}>
            <Icon name={props.IconName} size={15} style={{marginLeft:10}}  />
            <Text  style={style.TextStyle} >{props.headerTitle}</Text>
           
           </TouchableOpacity>
           
        );


export {CardSection};

const style ={
    headerStyle: {
        width:'100%',
        backgroundColor: '#ffffff',
        height: 80,
         alignItems: 'center',
        flexDirection:'row',
       ...Platform.select({
            ios:{
                shadowColor: '#3d0000',
                shadowRadius: 5,
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.3,
            },
            android:{
                elevation: 3,
                position:'relative',
            }

        }),
    },TextStyle:{
        color:'#000',
        fontSize: 20,
        marginLeft:10
    }
}
