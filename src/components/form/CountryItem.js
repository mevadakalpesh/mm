import React, { memo } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

const CountryItem = memo(({item,languageModalToggel}) => {
    return (
       <TouchableOpacity 
            underlayColor="dark"
            activeOpacity={0.7}
            onPress={() => languageModalToggel(item)}
            style={item.alpha2Code === "IN" ? { 
                  backgroundColor: '#2EACF2',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#fff', // Choose a color that contrasts with the background
                  elevation: 5, // Adjust elevation for a lifted effect
                } : {}}
            >
            <View style={styles.languageItem}>
              <Image
                source={{ uri: item.flags?.png }}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>+{item?.callingCodes[0]}</Text>
            </View>
            </TouchableOpacity>
    )
});

export default CountryItem;

const styles = StyleSheet.create({
  
  languageItem:{
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'98%',
    height:60,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1, 
    marginVertical:7,
    marginHorizontal:2,
    paddingHorizontal:5
  },
  image: {
    width: 50,
    height:50
  },
  text:{
    fontWeight:'500'
  }
});