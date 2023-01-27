import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './RoomModal.style';
import Button from '../../Button';

const RoomModal = ({visible, onClose, onSend, placeholder}) => {
  const [roomName, setRoomName] = useState(null);

  function handleSend() {
    if (!roomName) {
      return;
    }
    onSend(roomName);
    setRoomName(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setRoomName}
            multiline
          />
        </View>
        <View style={styles.button_container}>
          <Button text="Create" onPress={handleSend} theme="secondary" />
        </View>
      </View>
    </Modal>
  );
};

export default RoomModal;
