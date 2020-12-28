import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

const App = () => {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setInterval(() => {
      setCount(count + 1);
    },3000);
  });

  return (
    <View style={{justifyContent:"center", flex:1, paddingHorizontal:16}}>
      <Text>Count Increment {count} times</Text>        
    </View>
  );
}

export default App