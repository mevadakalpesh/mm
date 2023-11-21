import {useState,useEffect,useCallback} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectCountryModal from '@components/form/SelectCountryModal';


const CountrySelectionInput = () => {
  const [isVisible,setIsVisible]=useState(false);

  const languageModalToggel = useCallback(() => {
    setIsVisible(!isVisible);
  });
  
  return (
    <View style={style.inputWarpper}>
      <Text style={style.label}>Phone Number</Text>
      <View style={style.inputGroup}>
        <TouchableOpacity style={style.input}  onPress={ () => languageModalToggel() }>
          <Image
            source={{ uri: "https://flagsapi.com/BE/flat/64.png" }}
            resizeMode="contain"
            style={style.image}
          />
          <Icon style={style.icon} name={'chevron-down'} size={15} color={'#333'} />
        </TouchableOpacity>
        <TextInput style={style.inputPhone} />
      </View>
      <SelectCountryModal
      isVisible={isVisible}
      languageModalToggel={languageModalToggel}
      />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: 'center',
    width: '25%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    marginRight:10
  },
  inputNumber: {
    backgroundColor: 'yellow',
  },
  image: {
    width: 40,
    height: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 2,
  },
  label: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 7,
  },
  inputGroup: {
    flexDirection: 'row', // Added 'flexDirection' to make items align horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Add space between items
    marginBottom: 0, // Added margin for spacing
  },
  inputPhone: {
    flex: 1, // Take the remaining available space
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  inputWarpper:{
    paddingVertical: 10,
  }
});

export default CountrySelectionInput;
