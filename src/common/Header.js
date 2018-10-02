import React from 'react';
import {Text,View} from 'react-native';
import { Platform } from 'react-native';
import {RoundImage} from '../common';
import userImage from '../../assets/icon.png';



const Header =(props)=>(
            <View style={style.headerStyle}>
            <RoundImage source={userImage}/>
                <Text  style={style.TextStyle} >{props.headerTitle}</Text>
            </View>
           
        );


export {Header};

const style ={
    headerStyle: {
        width:'100%',
        backgroundColor: '#105291',
        paddingTop: 20,
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
        color:'#fff',
        fontSize: 20,
        marginLeft:10
    }
}

