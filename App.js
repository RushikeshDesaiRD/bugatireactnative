
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';
import CarScreen from "./screens/CarScreen"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Colors= {
  primary:"#2d2d45",
  secondary:"#018edd",
  white:"white",
  black:"black",
  gray:"#8e8e90",
  graySecond:"#e6e6e6"
}
import Ionicons from "react-native-vector-icons/Ionicons"
const App = () => {
  return (
    <>
     <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.graySecond} translucent = {true}/>
     {/* <CarScreen/> */}
    <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.topBarInner}>
            <TextInput style={styles.inputStyle} placeholder="Search Your Brand"/>
            <FontAwesome5 style={{marginLeft:20}} color={Colors.gray} size={25} name="search"/>
          </View>

        </View>
        <View style={{padding:10}}>

        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
           <View>
             <Text style={{fontSize:35, fontWeight:"400"}}>Discover</Text>
             <Text style={{color:Colors.gray,fontSize:25}}>Car</Text>
           </View>
           <Image source={require("./p1.jpg")} style={{height:70, width:70, borderRadius:10}}/>

          </View>




          <View style={{flexDirection:"row", marginTop:20}}>
            <View>
                <View style={{padding:10, backgroundColor:Colors.secondary,borderRadius:15}}>
                    <Image source={require("./ok.png")} style={{height:50, width:50}}/>
                </View>
                <View style={{padding:10,  borderRadius:15, marginTop:10}}>
                    <Image source={require("./ferarri.png")} style={{height:50, width:50}}/>
                </View>
                <View style={{padding:10,  borderRadius:15, marginTop:10}}>
                    <Image source={require("./mer.png")} style={{height:50, width:50}}/>
                </View>
                <View style={{padding:10, borderRadius:15, marginTop:10}}>
                    <Image source={require("./tesla.png")} style={{height:50, width:50}}/>
                </View>
            </View>



            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
                <View style={{ width:200,marginLeft:30,backgroundColor:Colors.primary, padding:10, borderRadius:16}}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                   <View>
                      <Text style={{color:Colors.white, fontWeight:"bold",fontSize:30}}>Bugatti</Text>
                      <Text style={{color:Colors.gray, fontSize:20,letterSpacing:1}}>Chiron</Text>
                   </View>
                   <Ionicons name="add" style={{fontWeight:"bold"}}  size={30} color={Colors.white}/>
                </View>
               <View style={{alignItems:"center"}}>
               <Image source={require("./b.png")} resizeMode="cover" style={{width:100, height:200}}/>
               </View>
                </View>



                <View style={{ width:200,marginLeft:10,backgroundColor:"#d9d9d9", padding:10, borderRadius:16}}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                   <View>
                      <Text style={{color:Colors.white, fontWeight:"bold",fontSize:30}}>Ferrari</Text>
                      <Text style={{color:Colors.primary, fontSize:20,letterSpacing:1}}>Portofinio</Text>
                   </View>
                   <Ionicons name="add" style={{fontWeight:"bold"}}  size={30} color={Colors.white}/>
                </View>
               <View style={{alignItems:"center"}}>
               <Image source={require("./gr.png")} resizeMode="cover" style={{width:100, height:200}}/>
               </View>
                </View>
            </ScrollView>
          </View>
        </View>
     </View>  
    </>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
    
    },
    topBar:{
      height:100,
      backgroundColor:Colors.graySecond,
      justifyContent:"space-around",
      alignItems:"center",
      marginTop:10
    },
    topBarInner:{
      width:"80%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-around",
      backgroundColor:Colors.white,
      borderRadius:10
      
    },
    inputStyle:{
     
    }
});

export default App;
