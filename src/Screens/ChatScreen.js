import React from 'react';
import { View, Text, FlatList} from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem/Index';

const ChatScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item}/>}
    />
  )
}

export default ChatScreen
