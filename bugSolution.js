```javascript
// bugSolution.js
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    // Sanitize the URI
    const sanitizedUri = result.uri.replace(/[^a-zA-Z0-9._]/g, '');
    console.log('Sanitized URI:', sanitizedUri);
    // Use the sanitized URI to display the image
  }
};
```