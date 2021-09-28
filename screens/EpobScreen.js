import React,{useState} from 'react';
import { Image, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {styles} from '../css/style.js';
import { Epub } from 'epubjs-rn';

 
export default function AterLoginScreen({navigation}) {
 
    return ( 
      <View style={styles.container} >
        <Epub src={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"}
		  flow={"paginated"} />

       </View>

    );
}
 
  