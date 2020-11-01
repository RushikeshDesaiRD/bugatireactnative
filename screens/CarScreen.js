
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
const Colors= {
    primary:"#2d2d45",
    secondary:"#018edd",
    white:"white",
    black:"black",
    gray:"#8e8e90",
    graySecond:"#abaaae"
}
const CarScreen = () => {
  return (
    <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primary} translucent = {true}/>
     <View style={styles.container}>
         <View style={styles.containeInner}>
            <FontAwesome5 size={25} color={Colors.white} style={{marginTop:10}} name="arrow-left"/>


            <View style={[styles.mainContainer,{marginTop:20}]}>
                <View style={styles.mainContainerInner}>
                    <Text style={{color:Colors.white, fontWeight:"bold",fontSize:40}}>Bugatti</Text>
                    <Text style={{color:Colors.gray, fontSize:30,letterSpacing:1}}>Chiron</Text>
                    <View style={[styles.menuCar,{marginTop:15}]}>
                        <View style={styles.menuCarMenu}>
                           <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Text style={{color:Colors.white, fontSize:20}}>Category</Text>
                              <View style={{backgroundColor:Colors.gray, width:5, height:5, borderRadius:5}}></View>
                           </View>
                           <Text style={{color:Colors.secondary, marginTop:5}}>Exotic</Text>
                        </View>
                        <View style={[styles.menuCarMenu, {marginTop:10, marginBottom:10, backgroundColor:Colors.white}]}>
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Text style={{color:Colors.black, fontSize:20}}>Power</Text>
                              <View style={{backgroundColor:Colors.gray, width:5, height:5, borderRadius:5}}></View>
                           </View>
                           <Text style={{color:Colors.secondary, marginTop:5}}>1,500 hp</Text>
                        </View>
                        <View style={styles.menuCarMenu}>
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Text style={{color:Colors.white, fontSize:20}}>Fuel-Type</Text>
                              <View style={{backgroundColor:Colors.gray, width:5, height:5, borderRadius:5}}></View>
                           </View>
                           <Text style={{color:Colors.secondary, marginTop:5}}>Premium</Text>
                        </View>
                    </View>
                </View>

                 <View style={styles.mainContainerInner}>
                     <Image source={require("../b.png")} resizeMode="cover" style={{marginLeft:10,width:"100%", height:400}}/>
                 </View>
            </View>



            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:20}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <MaterialCommunityIcons size={40} color={Colors.black} style={{padding:5, borderRadius:5, backgroundColor:Colors.graySecond}} name="fuel"/>
              
                   <View style={{marginLeft:20}}>
                   <Text style={{color:Colors.gray, fontSize:20}}>6.8 Kmpl</Text>
                    <Text style={{color:Colors.gray, fontSize:17}}>Per Liter</Text>
                   </View>
                </View>
                <Ionicons name="add" size={30} color={Colors.secondary}/>

            </View>

            <View style={{borderRadius:10,flexDirection:"row", elevation:3,justifyContent:'space-between', alignItems:"center",padding:10, backgroundColor:Colors.secondary}}>
               <Text style={{color:Colors.white,fontSize:20}}>$450 / Day</Text>
               <FontAwesome5 size={25} style={{padding:10, backgroundColor:Colors.white, borderRadius:10}} color={Colors.gray} name="arrow-right"/>
            </View>
       
         </View>
     </View>

    </>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:Colors.primary
  },
  containeInner:{
      marginLeft:25,
      marginTop:25,
      marginRight:15
  },
  mediaImg:{

  },
  mainContainer:{
      width:"100%",
      flexDirection:"row"
  },
  mainContainerInner:{
      width:"50%"
  },
  mediaImg:{
      width:"110%",
      height:600
  },
  menuCarMenu:{
     padding:20,
     borderRadius:10,
     borderWidth:1,
     borderColor:Colors.gray
  }

});

export default CarScreen;
