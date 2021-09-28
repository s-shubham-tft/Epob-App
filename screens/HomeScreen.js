import React,{useState} from 'react';
import { Image, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {styles} from '../css/style.js';
 
export default function HomeScreen({navigation}) {
 
    return ( 
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
             
              <Text style={styles.headh3} >
                You are Home
              </Text>
            </View>
          </View>
        </View>
       </View>

    );
}
 
  