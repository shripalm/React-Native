import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './Styles';
import baNaNa from './assets/ba-na-na.jpeg';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      alert('Cancelled')
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  const alertBox = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log('Ask Me Later XD')
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog.",
            "", [], { cancelable: true }
          ),
      }
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={((selectedImage === null) ? baNaNa : { uri: selectedImage.localUri })}
        style={{ width: 200, height: 200 }}
      ></Image>
      {
        ((selectedImage === null) ?
          <></>
          :
          <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>
          </TouchableOpacity>
        )
      }
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}