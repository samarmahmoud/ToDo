import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import {Input} from '../common';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

class NewTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedStartDate: null,
          };
    }
    static navigationOptions=({navigation})=>{
        return{
        title:"New",
        headerTitleStyle:{
            fontSize:25,
            color:'#ffffff',
            marginLeft:95
        },
        headerStyle :{
            backgroundColor:'#105291'
        },
        headerLeft:<TouchableOpacity onPress={()=>{navigation.goBack()}}>
                  <Icon name={"cancel"} size={25} color={'#fff'} 
                        style={{marginLeft:10}}/>
                  </TouchableOpacity>,
        headerRight:<TouchableOpacity>
            <Text style={{color:'#fff',fontSize:20,marginRight:10}}>Save</Text>
        </TouchableOpacity> 
        }            

};
onDateChange(date) {
     this.setState({selectedStartDate: date,});
      }

    render(){
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
       
        return(
          <View style={style.Container}>
          <View>
              <Text>{'Date:'+startDate}</Text>
          <CalendarPicker
               onDateChange={this.onDateChange.bind(this)}
               />
          </View>
          <View style={{borderBottomColor: '#eaeaea', borderBottomWidth: 1}}></View>
              <Input type={"TaskName"}
              
              />
              
          </View>
        );
    }

}
export default NewTask;

const style={
    Container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:"#e1f5fe",

    },

}