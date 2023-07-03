import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem/Index';

const chat = {
  id: '1',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
    name: 'Emma'
  },
  lastMessage: {
    text: 'Oke',
    createdAt: '07:50'
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
