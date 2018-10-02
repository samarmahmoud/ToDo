import React from 'react';
import { Text, View,Image } from 'react-native';
import Logo from '../../assets/TodosIcon.png';
import Icon from 'react-native-vector-icons/FontAwesome';


class Home extends React.Component{
    static navigationOptions={
            title:"TODO",
            headerTitleStyle:{
                fontSize:25,
                alignSelf:'center',
                color:'#ffffff',
            },
            headerStyle :{
                backgroundColor:'#105291'
            },

    };
    render(){
        return(
          <View style={style.Container}>
          <Image source={Logo} style={{width:200,height:200}}></Image>
            <Text style={{color:'#105291',fontSize:20}}>ToDo</Text>
          </View>
        );
    }

}
export default Home;

const style={
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff"
    },

}