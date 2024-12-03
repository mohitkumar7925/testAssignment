import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Icons } from "../../utils/Icons"

export const HomeHeader = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={Icons.homeTab} style={styles.leftIcon} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.filter} style={styles.rightIcon} resizeMode='contain'/>
        </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:"100%",
    },
    leftIcon:{
      width:27,
      height:27
    },
    rightIcon:{
      width:32,
      height:32
    },
  
  })