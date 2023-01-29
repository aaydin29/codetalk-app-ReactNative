import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import parseContentData from '../../utils/parseContentData';
import MessageModal from '../../components/modal/MessageModal';
import FloatingButton from '../../components/FloatingButton';
import MessageCard from '../../components/cards/MessageCard';
import styles from './Messages.style';

const Messages = ({route}) => {
  const {item} = route.params;

  const [messageModal, setMessageModal] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${item.id}/${item.roomName.split('#')[0]}`)
      .on('value', snapshot => {
        const newContentData = snapshot.val();
        const parsedData = parseContentData(newContentData || {});
        setMessageList(parsedData);
      });
  }, [item.id, item.roomName]);

  function handleMessageModalToggle() {
    setMessageModal(!messageModal);
  }

  const handleSendMessage = content => {
    handleMessageModalToggle();
    sendMessage(content);
  };

  const sendMessage = content => {
    const userMail = auth().currentUser.email;

    const contentData = {
      message: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database()
      .ref(`rooms/${item.id}/${item.roomName.split('#')[0]}/`)
      .push(contentData);
  };

  const renderMessages = ({item}) => <MessageCard user={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.auto_message_container}>
        <Text style={styles.auto_message}>{item.roomName} room created!</Text>
      </View>
      <FlatList data={messageList} renderItem={renderMessages} />
      <FloatingButton icon="plus" onPress={handleMessageModalToggle} />
      <MessageModal
        visible={messageModal}
        onClose={handleMessageModalToggle}
        onSend={handleSendMessage}
        placeholder="Enter your message here..."
      />
    </View>
  );
};

export default Messages;
