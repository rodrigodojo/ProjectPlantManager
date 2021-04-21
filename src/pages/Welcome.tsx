import React from 'react';
import {Text, Image ,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import {Entypo} from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';  
import colors from '../colors';

export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Gerencie{'\n'}suas plantas{'\n'}de forma fácil
        </Text>
        <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode="contain"
        />
        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>
            <Entypo name="chevron-thin.right" />
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around'        
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    subtitle : {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal:20,
        color: colors.heading
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
    },
    buttonText: {
        fontSize: 24,
        color: colors.white
    }

})