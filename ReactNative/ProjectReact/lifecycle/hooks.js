import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const App = () => {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <View style={{justifyContent:"center", flex:1, paddingHorizontal:16}}>
      <Button onPress={() => setCount(count + 1)} title="Tambah"/>
      <Text style={{alignItems:'center'}}>Anda menekan sebanyak {count} kali</Text>
      <Button onPress={() => setCount(count - 1)} title="Kurang"/>
        
    </View>
  );
}

export default App