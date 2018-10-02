import React from 'react';
import {TextInput,View} from 'react-native';
import {style} from './style';

const Input =(props)=>{
 
  let keyboardType='default',secureInpute=false,placeholder='';
  
    switch(props.type){
        case "Date":{
          placeholder="Date"
            
        }
        break;
        case "TaskName":{
          placeholder="Description" 
        }
        break;
        default :{
          keyboardType='default',
          secureInpute=false,
          placeholder='';
        }

    
    
  }
    return(
   
    <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#2196f3" 
            underlineColorAndroid='transparent'
            secureTextEntry={secureInpute}
            keyboardType={keyboardType}
            style={style.TextStyle} >
          </TextInput>
  
 );
};

export {Input};