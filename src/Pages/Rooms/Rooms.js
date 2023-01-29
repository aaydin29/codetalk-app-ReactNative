import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import database from '@react-native-firebase/database';

import FloatingButton from '../../components/FloatingButton';
import RoomModal from '../../components/modal/RoomModal';
import parseContentData from '../../utils/parseContentData';
import RoomCard from '../../components/cards/RoomCard/RoomCard';
import styles from './Rooms.style';

const Rooms = ({navigation}) => {
  const [roomNameVisible, setRoomNameVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setRoomList(parsedData);
      });
  }, []);

  function handleRoomModalToggle() {
    setRoomNameVisible(!roomNameVisible);
  }

  const handleSendRoomName = content => {
    handleRoomModalToggle();
    sendRoomName(content);
    showMessage({
      message: 'Room created.',
      type: 'success',
    });
  };

  const sendRoomName = content => {
    const contentObject = {
      roomName: content,
    };
    // console.log(contentObject);
    database().ref('rooms/').push(contentObject);
  };

  const handleRoomToMessage = item => {
    navigation.navigate('Messages', {item});
  };

  const renderRoomList = ({item}) => (
    <RoomCard onPress={() => handleRoomToMessage(item)} rooms={item} />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList data={roomList} renderItem={renderRoomList} />
      </View>
      <FloatingButton icon="plus" onPress={handleRoomModalToggle} />
      <RoomModal
        visible={roomNameVisible}
        onClose={handleRoomModalToggle}
        onSend={handleSendRoomName}
        placeholder="Enter room name you want to create..."
      />
    </View>
  );
};

export default Rooms;
